import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { map, tap } from 'rxjs';
import { PlanLogEntity } from 'src/entities/plan-log.entity';
import { GetProductValidator } from 'src/validators/product.validator';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  private baseUrl = '';
  constructor(
    @InjectRepository(PlanLogEntity)
    private readonly planLogRepo: Repository<PlanLogEntity>,
    private readonly axios: HttpService,
    private readonly configservice: ConfigService,
  ) {
    this.baseUrl = this.configservice.get('api.url');
  }

  getProduct(query: GetProductValidator) {
    const params = {
      genderCd: query.genderCd,
      dob: query.dob,
      planCode: query.planCode,
      premiumPerYear: Number(query.premiumPerYear),
      paymentFrequency: query.paymentFrequency,
    };

    if (query.saPerYear) {
      Object.assign(params, {
        saPerYear: query.saPerYear,
      });
    }

    return this.axios
      .post(`${this.baseUrl}/getProduct`, params, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'cache-control': 'no-cache',
          'Postman-Token': '7454ba0a-cbf4-4282-aee6-56e6125718b2',
        },
      })
      .pipe(
        map((res) => res.data),
        tap((data) => {
          const saveData: Partial<PlanLogEntity> = {
            Dob: params.dob,
            Gender: params.genderCd,
            PlanId: params.planCode,
            Premium: params.premiumPerYear,
            Result: data,
          };

          if ('saPerYear' in saveData) {
            Object.assign(saveData, {
              saPerYear: params['saveData'],
            });
          }

          this.planLogRepo.save(saveData);
        }),
      );
  }
}

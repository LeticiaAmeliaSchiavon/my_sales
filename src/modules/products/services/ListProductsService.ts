import RedisCache from '@shared/cache/RedisCache';
import { Product } from '../database/entities/Product';
import { productsRepositories } from '../database/repositories/ProductsRepositories';

export default class ListProductService {
  client: any;
  async execute(): Promise<Product[]> {
    const redisCache = new RedisCache();

    let products = await redisCache.recover<Product[]>(
      'api-mysales-PRODUCT_LIST',
    );

    if (!products) {
      products = await productsRepositories.find();

      await redisCache.save(
        'api-mysales-PRODUCT_LIST',
        JSON.stringify(products),
      );
    }

    return products;
  }

  async invalidate(key: string): Promise<void> {
    await this.client.del(key);
  }
}

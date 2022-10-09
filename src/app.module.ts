import { Module } from "@nestjs/common";
import { DetailModule } from './detail/detail.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [DetailModule, SearchModule],
})
export class AppModule {}

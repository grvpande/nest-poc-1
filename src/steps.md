- create dtos to provide the shape of the object being transferred
- create Entity with ORM to have @Column and @PrimaryGeneratedColumn decorators
- Create connection to the repository by using:
  - `import { Repository } from 'typeorm';`
  - `import { InjectRepository } from '@nestjs/typeorm';`
  -  `@InjectRepository(T) private repo: Repository<T>`
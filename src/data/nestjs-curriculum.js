export const nestjsCurriculum = [
    {
        day: 1,
        title: "NestJS 시작하기 & 아키텍처",
        description: "NestJS의 철학과 기본 구조를 이해하고, 첫 번째 프로젝트를 생성합니다.",
        duration: "1.5시간",
        topics: [
            {
                title: "NestJS란?",
                content: "Angular의 영향을 받은 구조적이고 확장 가능한 Node.js 프레임워크입니다. TypeScript를 기본으로 지원합니다.",
                code: `// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();`
            },
            {
                title: "Module 구조",
                content: "NestJS는 모듈 단위로 애플리케이션을 구성합니다. Root Module에서 시작하여 트리 구조를 이룹니다.",
                code: `// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}`
            }
        ],
        challenge: {
            title: "Hello NestJS",
            description: "Nest CLI를 설치하고 새 프로젝트를 생성한 뒤, 'Hello NestJS World!'를 반환하는 기본 라우트를 만들어보세요.",
            solution: `// app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello NestJS World!';
  }
}`
        }
    },
    {
        day: 2,
        title: "Controller와 Routing",
        description: "클라이언트의 요청을 받아 처리하는 Controller의 역할과 데코레이터를 배웁니다.",
        duration: "2시간",
        topics: [
            {
                title: "기본 라우팅",
                content: "@Controller와 @Get, @Post 등의 데코레이터로 엔드포인트를 정의합니다.",
                code: `@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}`
            },
            {
                title: "요청 객체 다루기",
                content: "@Req, @Body, @Query, @Param 등을 사용하여 요청 데이터에 접근합니다.",
                code: `@Post()
create(@Body() createCatDto: any) {
  return 'This action adds a new cat';
}

@Get(':id')
findOne(@Param('id') id: string) {
  return \`This action returns a #\${id} cat\`;
}`
            }
        ],
        challenge: {
            title: "사용자 API 만들기",
            description: "'/users' 경로로 들어오는 GET, POST 요청을 처리하는 Controller를 작성하세요. (POST 요청은 body 내용을 그대로 반환)",
            solution: `import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return '모든 유저 조회';
  }

  @Post()
  create(@Body() userData: any) {
    return userData;
  }
}`
        }
    },
    {
        day: 3,
        title: "Provider와 의존성 주입 (DI)",
        description: "NestJS의 핵심인 Dependency Injection 패턴과 Provider(Service)의 역할을 이해합니다.",
        duration: "2.5시간",
        topics: [
            {
                title: "Service 만들기",
                content: "비즈니스 로직은 Service에 작성하고 @Injectable() 데코레이터를 붙입니다.",
                code: `@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}`
            },
            {
                title: "의존성 주입",
                content: "Controller의 생성자에서 Service를 주입받아 사용합니다.",
                code: `@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}`
            }
        ],
        challenge: {
            title: "할 일 목록 서비스",
            description: "메모리에 할 일(Todo) 목록을 저장하고 관리하는 TodoService를 만들고 Controller에 연결하세요.",
            solution: `// todo.service.ts
@Injectable()
export class TodoService {
  private todos = [];
  
  add(task: string) {
    this.todos.push(task);
  }
  
  getAll() {
    return this.todos;
  }
}

// todo.controller.ts
@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}
  
  @Get()
  getTodos() {
    return this.todoService.getAll();
  }
}`
        }
    },
    {
        day: 4,
        title: "DTO와 유효성 검사 (Validation)",
        description: "데이터 전송 객체(DTO)를 정의하고 class-validator를 이용해 입력값을 검증합니다.",
        duration: "2시간",
        topics: [
            {
                title: "DTO (Data Transfer Object)",
                content: "계층 간 데이터 교환을 위한 객체를 클래스로 정의합니다.",
                code: `export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}`
            },
            {
                title: "Validation Pipe",
                content: "ValidationPipe를 전역 또는 핸들러 레벨에 적용하여 DTO의 유효성을 자동으로 검사합니다.",
                code: `// main.ts
app.useGlobalPipes(new ValidationPipe());

// create-cat.dto.ts
import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;
}`
            }
        ],
        challenge: {
            title: "회원가입 유효성 검사",
            description: "이메일(email 형식)과 비밀번호(최소 6자)를 필수로 받는 CreateUserDto를 작성하고 적용하세요.",
            solution: `import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}

// Controller에서 사용
@Post()
create(@Body() createUserDto: CreateUserDto) {
  return '유효성 검사 통과';
}`
        }
    },
    {
        day: 5,
        title: "TypeORM과 데이터베이스",
        description: "TypeORM을 사용하여 관계형 데이터베이스(PostgreSQL, MySQL 등)와 연동합니다.",
        duration: "3시간",
        topics: [
            {
                title: "Entity 정의",
                content: "데이터베이스 테이블과 매핑되는 클래스(Entity)를 정의합니다.",
                code: `@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({ default: true })
  isActive: boolean;
}`
            },
            {
                title: "Repository 패턴",
                content: "Repository를 주입받아 DB 작업을 수행합니다.",
                code: `@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}`
            }
        ],
        challenge: {
            title: "상품 엔티티 만들기",
            description: "상품명(name), 가격(price), 재고(stock) 컬럼을 가진 Product 엔티티를 정의하세요.",
            solution: `import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ default: 0 })
  stock: number;
}`
        }
    },
    {
        day: 6,
        title: "CRUD 실전 구현",
        description: "지금까지 배운 내용을 종합하여 게시판의 CRUD(생성, 조회, 수정, 삭제) 기능을 완성합니다.",
        duration: "3시간",
        topics: [
            {
                title: "예외 처리 (Exception Filters)",
                content: "HTTP 예외를 적절하게 던지고 처리하는 방법을 배웁니다.",
                code: `const user = await this.usersRepository.findOneBy({ id });
if (!user) {
  throw new NotFoundException('User not found');
}`
            },
            {
                title: "전체 흐름 연결",
                content: "Controller -> Service -> Repository로 이어지는 데이터 흐름을 완성합니다.",
                code: `// Controller
@Delete(':id')
remove(@Param('id') id: string) {
  return this.usersService.remove(+id);
}

// Service
async remove(id: number): Promise<void> {
  await this.usersRepository.delete(id);
}`
            }
        ],
        challenge: {
            title: "게시글 수정 기능",
            description: "특정 ID의 게시글을 수정하는 Update 로직을 구현하세요. (존재하지 않으면 404 에러)",
            solution: `// Service
async update(id: number, updateBoardDto: UpdateBoardDto) {
  const board = await this.boardRepository.findOneBy({ id });
  if (!board) {
    throw new NotFoundException(\`Board with ID \${id} not found\`);
  }
  // 업데이트 로직...
  return this.boardRepository.save({ ...board, ...updateBoardDto });
}`
        }
    },
    {
        day: 7,
        title: "인증과 보안 (Guards)",
        description: "Guard를 사용하여 특정 라우트에 대한 접근 권한을 제어하고, JWT 인증을 적용합니다.",
        duration: "3.5시간",
        topics: [
            {
                title: "Guards",
                content: "요청을 처리하기 전에 권한이 있는지 확인합니다. @UseGuards()로 적용합니다.",
                code: `@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}`
            },
            {
                title: "JWT Strategy",
                content: "Passport 라이브러리와 함께 JWT 전략을 구현하여 토큰을 검증합니다.",
                code: `@UseGuards(AuthGuard('jwt'))
@Get('profile')
getProfile(@Request() req) {
  return req.user;
}`
            }
        ],
        challenge: {
            title: "관리자 전용 라우트",
            description: "RolesGuard를 만들어 'admin' 권한을 가진 사용자만 접근할 수 있는 API를 만드세요.",
            solution: `// RolesGuard 구현 (생략)

@Post()
@Roles('admin')
@UseGuards(AuthGuard, RolesGuard)
create(@Body() createDto: CreateDto) {
  return this.service.create(createDto);
}`
        }
    }
];

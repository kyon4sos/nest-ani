import { Test, TestingModule } from '@nestjs/testing';
import { Video } from './video.entity';

describe('Video', () => {
  let provider: Video;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Video],
    }).compile();

    provider = module.get<Video>(Video);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

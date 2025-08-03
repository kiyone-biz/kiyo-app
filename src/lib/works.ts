import { Work } from '@/types/work';

export const getAllWorks = async (): Promise<Work[]> => {
  return [
    {
      id: '1',
      title: 'ポートフォリオサイト',
      description: 'Next.jsとTailwindで構築',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      id: '2',
      title: '企業用LPサイト',
      description: 'React＋デザインシステムで開発',
      imageUrl: 'https://picsum.photos/200',
    },
  ];
};

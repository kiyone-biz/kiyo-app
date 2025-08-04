import { getAllWorks } from '@/lib/works';
import { Work } from '@/types/work';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

const WorkDetailPage = async ({ params }: Props) => {
  const works: Work[] = await getAllWorks();
  const id = (await params).id;
  const work: Work | undefined = works.find((item) => item.id === id);

  if (!work) {
    notFound(); // 404ページを表示
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <img
        src={work.imageUrl}
        alt={work.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-3xl font-bold mt-4">{work.title}</h1>
      <p className="mt-2 text-gray-700">{work.description}</p>
    </main>
  );
};

export default WorkDetailPage;

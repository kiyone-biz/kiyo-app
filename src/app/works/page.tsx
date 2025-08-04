import { WorkCard } from '@/components/WorkCard';
import { getAllWorks } from '@/lib/works';

const WorksPage = async () => {
  const works = await getAllWorks();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">制作実績</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {works.map(work => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </main>
  );
};

export default WorksPage;

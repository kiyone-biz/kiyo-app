import { Work } from '@/types/work';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  work: Work;
};

export const WorkCard: FC<Props> = ({ work }) => {
  return (
    <Link href={`/works/${work.id}`}>
      <div className="rounded shadow hover:shadow-lg transition p-4 border cursor-pointer">
        <img src={work.imageUrl} alt={work.title} className="w-full h-48 object-cover rounded" />
        <h3 className="text-xl font-semibold mt-2">{work.title}</h3>
        <p className="text-gray-600">{work.description}</p>
      </div>
    </Link>
  );
};

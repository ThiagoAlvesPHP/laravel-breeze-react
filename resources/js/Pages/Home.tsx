import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Home({ name }: PageProps<{ name: String }>) {
    return (
        <>
            <Head title="Home" />
            <div className="bg-slate-100 h-screen">
                <h1 className='text-center text-2xl font-bold'>{name}</h1>
            </div>
        </>
    );
}

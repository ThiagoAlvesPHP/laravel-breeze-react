import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Example({ auth, list }: PageProps<{ list: Array<string> }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Example Page</h2>}
        >
            <Head title="Example Page" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Pagina de exemplo!</div>

                        {list.join(" | ")}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

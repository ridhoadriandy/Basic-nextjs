import Layout from '@/components/Layout';
import BookIcon from '@/components/svgs/book';
import SubTaskIcon from '@/components/svgs/subtask';

export default function Home() {
  return (
    <Layout>
      <main className="px-3 py-12 bg-slate-50">
        <section className="mt-[58px] md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto md:px-4">
          <div>
            <h3 className="flex flex-col font-light text-[32px] md:text-[72px]">
              <span className="flex items-center ">
                Let's learn
                <SubTaskIcon className="md:w-14 md:h-14" />
              </span>
              <span className="flex items-center">
                to code <BookIcon className="md:w-14 md:h-14" />
              </span>
              <span className="flex items-center">an application</span>
            </h3>
          </div>
          <div></div>
        </section>
      </main>
    </Layout>
  );
}

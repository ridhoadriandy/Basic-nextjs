import HeadIcon from '@/components/Icon/social';
import BookIcon from '@/components/Svgs/book';
import SubTaskIcon from '@/components/Svgs/subtask';

export default function Hero() {
  return (
    <main className="px-3 md:px-4 pt-12">
      <section className="mt-[58px] md:max-w-4xl lg:max-w-7xl mx-auto md:px-4 space-y-8 lg:flex lg:items-end lg:justify-between">
        <h3 className="flex flex-col font-light text-[32px] md:text-[72px]">
          <Span
            name="Let's learn"
            icon={<SubTaskIcon className={iconClass} />}
          />

          <Span name="to code" icon={<BookIcon className={iconClass} />} />

          <Span name="an application" />
        </h3>

        <div className="space-y-8 lg:pb-5">
          <div className="max-w-sm">
            <p>
              with me <span className="text-pink-400">Ridho Adriandy</span>, a
              software developer who loves to share how to code in many
              programing languages and multi platforms.
            </p>
          </div>

          <div className="flex place-items-center space-x-4">
            <button className="py-2 px-6 border rounded-full text-white bg-pink-400">
              Start Learn
            </button>
            <HeadIcon ClassName="flex md:flex-col z-10 space-x-4 md:space-x-0 md:space-y-6 md:fixed top-[440px] md:right-4 lg:hidden" />
          </div>
        </div>
      </section>
    </main>
  );
}

const iconClass = 'md:w-14 md:h-14';
function Span(props: any) {
  return (
    <span className="flex items-center ">
      {props.name}
      {props.icon}
    </span>
  );
}

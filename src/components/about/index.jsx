import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Software Engineer
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            I am a software engineer with a Bachelor’s degree in Computer
            Science, with experience across development, deployment, and
            troubleshooting of software systems. I have worked on projects
            end-to-end, including system setup, issue identification, and
            continuous improvement, applying Agile methodologies such as SCRUM
            and LEAN. I also built and continuously maintain my own Linux
            server, strengthening my skills in system administration and
            troubleshooting. I have worked as a contractor for multiple
            international companies, including Rakuten. I have a strong interest
            in electronics and hands-on problem solving, which I regularly
            develop through practical work on computer and hardware systems. I
            am seeking to apply these skills in the robotics industry,
            particularly in roles that combine both hardware and software.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="flex items-center gap-4 font-semibold w-full text-left text-2xl sm:text-5xl">
            12+
            <span className="font-semibold text-base">clients</span>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="flex items-center gap-4 font-semibold w-full text-left text-2xl sm:text-5xl">
            5+
            <span className="font-semibold text-base">years of experience</span>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=JeromeChallet&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false`}
            alt="jerome challet"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=JeromeChallet&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false`}
            alt="jerome challet"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=html,css,js,ts,react,redux,bootstrap,sass,vue,vite,nodejs,vue,postman,vitest,cs,cpp,aws,firebase,git,github,windows,unity,jest,ps,wordpress,azure,blender,storybook"
            alt="jerome challet"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=JeromeChallet&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FFFFFF&currStreakLabel=FFFFFF`}
            alt="jerome challet"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/JeromeChallet"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=JeromeChallet&repo=three-js-portfolio-mark-1&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false&description_lines_count=2`}
              alt="jerome challet"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;

import {GetStaticProps} from "next";
import courseService from "@/services/courseService";

export const getStaticProps: GetStaticProps = async () => {
    const res = await courseService.getNewestCourses();
    return {
        props: {
            course: res.data
        },
        revalidate: 3600 * 24,
    };
};
export default class IndexPageProps{
}
import Card from "../UI/Card";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
    return (
        <Card className="2xl:w-3/4 flex-wrap rounded-xl border-slate-600 xl:w-full
                        mx-auto p-5 relative flex items-center justify-center
                        max-lg:w-full lg:w-full max-md:w-full md:w-full
                        max-md:px-1 max-md:flex-wrap max-md:flex-col
                        ">
            <div className="w-11/12 2xl:flex xl:flex gap-6 items-center justify-center
                            max-md:grid max-md:w-full max-md:grid-cols-2 
                            max-md:place-items-center max-md:place-content-center
                            md:grid md:w-full md:grid-cols-2 
                            md:place-items-center md:place-content-center
                            ">
                <CategoryItem />
            </div>
            {/* <button type="button" className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400">
                <ArrowLeft2 />
            </button>
            <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
                <ArrowRight2 />
            </button> */}
        </Card>
    );
}

export default CategoryList;
import StoryWrapper from "@/components/StoryWrapper";

import Pagination from "@/components/Pagination";

export default { title: "General/Pagination" };

export const Default = () => ({
    components: { StoryWrapper, Pagination },
    template: `
        <StoryWrapper center>
            <Pagination url="/lists" :current="2" :last="5" />
        </StoryWrapper>
    `
});

import StoryWrapper from "@/components/StoryWrapper";

import SidebarMenu from "@/components/SidebarMenu";

export default { title: "List/SidebarMenu" };

export const Default = () => ({
    components: { StoryWrapper, SidebarMenu },
    data() {
        return {
            items: [
                { name: "Path 1", to: "path-1" },
                { name: "Path 2", to: "path-2" },
                { name: "Path 3", to: "path-3" },
                { name: "Path 4", to: "path-4" }
            ]
        };
    },
    template: `
        <StoryWrapper center>
            <SidebarMenu :items="items" />
        </StoryWrapper>
    `
});

import StoryWrapper from "@/components/StoryWrapper";

import Grid from "@/components/Grid";
import GridColumn from "@/components/GridColumn";

export default { title: "Grid" };

export const Columns6 = () => ({
    components: { StoryWrapper, Grid, GridColumn },
    template: `
        <StoryWrapper>
            <Grid :xs="6">
                <GridColumn class="bg-pink-200">
                    Column 1
                </GridColumn>
                <GridColumn class="bg-pink-200">
                    Column 2
                </GridColumn>
                <GridColumn class="bg-pink-200">
                    Column 3
                </GridColumn>
                <GridColumn class="bg-pink-200">
                    Column 4
                </GridColumn>
                <GridColumn class="bg-pink-200">
                    Column 5
                </GridColumn>
                <GridColumn class="bg-pink-200">
                    Column 6
                </GridColumn>
            </Grid>
        </StoryWrapper>
    `
});

export const Columns4 = () => ({
    components: { StoryWrapper, Grid, GridColumn },
    template: `
        <StoryWrapper>
            <Grid :xs="6">
                <GridColumn class="bg-pink-200">
                    Column 1
                </GridColumn>
                <GridColumn :xs="2" class="bg-pink-200">
                    Column 2
                </GridColumn>
                <GridColumn :xs="2" class="bg-pink-200">
                    Column 3
                </GridColumn>
                <GridColumn class="bg-pink-200">
                    Column 4
                </GridColumn>
            </Grid>
        </StoryWrapper>
    `
});

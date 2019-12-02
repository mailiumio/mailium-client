import StoryWrapper from "@/components/StoryWrapper";

import FeedbackMessage from "@/components/FeedbackMessage";

export default { title: "Feedback" };

export const Default = () => ({
    components: { StoryWrapper, FeedbackMessage },
    methods: {
        expired() {
            console.log("expired");
        }
    },
    template: `
        <StoryWrapper center>
            <FeedbackMessage @expired="expired">
                Saved
            </FeedbackMessage>
        </StoryWrapper>
    `
});

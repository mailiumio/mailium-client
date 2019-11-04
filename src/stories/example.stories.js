/* eslint-disable import/no-extraneous-dependencies */
import StoryWrapper from '../components/StoryWrapper.vue'

export default { title: 'Generel/Button' }

export const Default = () => ({
    components: { StoryWrapper },
    template: `
        <StoryWrapper>
            <div>
                Component content
            </div>
        </StoryWrapper>
    `
})

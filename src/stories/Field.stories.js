import StoryWrapper from '@/components/StoryWrapper'

import Field from '@/components/Field'

export default { title: 'Forms/Field' }

export const Text = () => ({
    components: { StoryWrapper, Field },
    template: `
        <StoryWrapper center>
            <Field placeholder="Type Text" label="Text" />
        </StoryWrapper>
    `
})

export const TextWithErrors = () => ({
    components: { StoryWrapper, Field },
    data() {
        return {
            errors: [
                'The field is required',
                'The field must only contain text characters'
            ]
        }
    },
    template: `
        <StoryWrapper center>
            <Field placeholder="Type Text" label="Text" :errors="errors" />
        </StoryWrapper>
    `
})

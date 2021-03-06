import StoryWrapper from '@/components/StoryWrapper'

import Modal from '@/components/Modal'
import ActionModal from '@/components/ActionModal'

export default { title: 'General/Modal' }

export const Default = () => ({
    components: { StoryWrapper, Modal },
    template: `
        <StoryWrapper>
            <Modal>
                Erat velit scelerisque in dictum non. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Nibh nisl condimentum id venenatis. Mi ipsum faucibus vitae aliquet. Volutpat ac tincidunt vitae semper quis. Rhoncus dolor purus non enim praesent. Quam lacus suspendisse faucibus interdum.
            </Modal>
        </StoryWrapper>
    `,
})

export const Action = () => ({
    components: { StoryWrapper, ActionModal },
    template: `
        <StoryWrapper>
            <ActionModal title="Are you sure?">
                Deleting this item will permanently delete these other items as well.
            </ActionModal>
        </StoryWrapper>
    `,
})

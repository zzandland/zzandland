export const changeRoleTitle = roleTitle => ({
  type: 'CHANGE_ROLE_TITLE',
  roleTitle,
});

export const showModal = (modalType, modalProps) => ({
  type: 'SHOW_MODAL',
  modalType,
  modalProps,
});

export const hideModal = () => ({
  type: 'HIDE_MODAL',
});

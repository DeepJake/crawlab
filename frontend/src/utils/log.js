const regexToken = ' :,.'

export default {
  errorRegex: new RegExp(`(?:[${regexToken}]|^)((?:error|exception|traceback)s?)(?:[${regexToken}]|$)`, 'gi')
}

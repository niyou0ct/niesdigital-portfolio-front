/* eslint-disable import/prefer-default-export */
import Axios, { AxiosResponse } from 'axios'
import { Contact } from '@/models/Contact'

/**
 *
 * @param payload
 */
export const postEmailOnContact = async (
  payload: Contact
): Promise<AxiosResponse<{ result: boolean }>> => {
  const { email, name, detail } = payload

  return Axios.post('/api/contact', {
    params: JSON.stringify({
      email,
      name,
      detail
    })
  })
    .then((response: AxiosResponse<{ result: boolean }>) => response)
    .catch((error) => error)
}

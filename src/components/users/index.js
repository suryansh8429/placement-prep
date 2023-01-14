import { SimpleGrid } from '@chakra-ui/react'
import User from './user'
import { useUsers } from 'hooks/users'
import Loader from '../Loader'

export default function Users() {
  const { users, isLoading } = useUsers()

  if (isLoading) return <Loader />

  return (
    <SimpleGrid columns={[2, 3, 4]} spacing={[2, 3]} px='10px' py='6'>
      {users?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </SimpleGrid>
  )
}

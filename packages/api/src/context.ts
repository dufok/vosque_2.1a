import { prisma } from '@my/db'
import { type inferAsyncReturnType } from '@trpc/server'
import { type CreateNextContextOptions } from '@trpc/server/adapters/next'
import { getAuth, clerkClient } from '@clerk/nextjs/server'
import type { User } from '@clerk/nextjs/api'

type IUserProps = {
  user: User | null
}

export const createContextInner = async ({ user }: IUserProps) => {
  return {
    user,
    prisma,
  }
}

export const createContext = async (opts: CreateNextContextOptions) => {
  async function getUser() {
    // get userId from request
    const { userId } = getAuth(opts.req)
    // get full user object
    const user = userId ? await clerkClient.users.getUser(userId) : null
    return user
  }

  const user = await getUser()

  return await createContextInner({ user })
}

export type Context = inferAsyncReturnType<typeof createContext>

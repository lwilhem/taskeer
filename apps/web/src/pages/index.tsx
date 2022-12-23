import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'

export default function HomePage() {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <section className="flex h-screen items-center justify-center bg-zinc-900">
      <div>
        {!session ? (
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="light" />
        ) : (
          <p>Account page will go here.</p>
        )}
      </div>
    </section>
  )
}

export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Track Expensive PostgreSQL Queries{' '}
          <span className="text-[#58a6ff]">by Feature</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect to your PostgreSQL instances, parse slow query logs, and instantly see which user actions are driving your database costs — with interactive dashboards and configurable feature mapping.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Instant access after payment.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Slow Query Parsing', desc: 'Automatically ingests and parses PostgreSQL slow query logs from any instance.' },
            { title: 'Feature Mapping', desc: 'Configurable rules associate queries with your app features and user actions.' },
            { title: 'Cost Analytics', desc: 'Interactive dashboards show cost impact per feature, query, and time period.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited PostgreSQL connections',
              'Slow query log parsing & storage',
              'Feature mapping rule builder',
              'Real-time cost dashboards',
              'Periodic log analysis jobs',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it connect to my PostgreSQL instance?',
              a: 'You provide a read-only connection string. The app connects securely to parse your pg_stat_statements or slow query log files — no write access required.'
            },
            {
              q: 'How are queries mapped to features?',
              a: 'You define mapping rules using query patterns, table names, or comment tags. The rule builder lets you associate any query signature with a named feature or user action.'
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} PostgreSQL Query Cost Tracker. All rights reserved.
      </footer>
    </main>
  )
}

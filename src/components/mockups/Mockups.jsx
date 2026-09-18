import React from "react";
import Icon from "../../assets/icons";

/* ------------------------------------------------------------------ */
/*  Internal building blocks (always render as a light "product shot") */
/* ------------------------------------------------------------------ */

const Bar = ({ w = "w-14", h = "h-1.5", c = "bg-gray-200" }) => (
  <span className={`inline-block rounded-full ${w} ${h} ${c}`} />
);

const Chip = ({ children, c = "bg-gray-100 text-gray-500" }) => (
  <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${c}`}>{children}</span>
);

const StatCard = ({ label, value, delta, bar }) => (
  <div className="rounded-lg border border-gray-100 bg-white p-2.5 shadow-sm">
    <p className="text-[9px] font-medium text-gray-400">{label}</p>
    <p className="text-sm font-bold text-gray-900 mt-0.5">{value}</p>
    {bar ? (
      <span className="inline-block mt-1 rounded-full bg-gradient-to-r from-[#147AFF]/50 to-[#5044E5]/50 h-1 w-12" />
    ) : (
      <span className="inline-block mt-1 text-[9px] font-semibold text-emerald-600 bg-emerald-500/10 px-1 rounded-full">
        {delta}
      </span>
    )}
  </div>
);

const MiniBars = ({ values, className = "h-16" }) => (
  <div className={`flex items-end gap-1 ${className}`}>
    {values.map((v, i) => (
      <div
        key={i}
        className={`flex-1 rounded-sm ${
          i === values.length - 1
            ? "bg-gradient-to-t from-[#5044E5] to-[#4d8cea]"
            : "bg-gradient-to-t from-[#147AFF]/25 to-[#5044E5]/25"
        }`}
        style={{ height: `${v}%` }}
      />
    ))}
  </div>
);

const Panel = ({ title, right, children, className = "" }) => (
  <div className={`rounded-lg border border-gray-100 bg-white p-3 shadow-sm ${className}`}>
    <div className="flex items-center justify-between mb-2.5">
      <p className="text-[9px] font-semibold text-gray-700">{title}</p>
      {right && <span className="text-[8px] font-semibold text-[#5044E5]">{right}</span>}
    </div>
    {children}
  </div>
);

const Window = ({ label, children, className = "" }) => (
  <div className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-[#5044E5]/10 dark:shadow-black/40 ${className}`}>
    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-gray-100 bg-gray-50/70">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-auto text-[9px] font-semibold uppercase tracking-widest text-gray-400">
        {label}
      </span>
    </div>
    <div className="p-3 sm:p-4 flex flex-col">{children}</div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Scenes                                                            */
/* ------------------------------------------------------------------ */

const BillingScene = () => (
  <>
    <div className="grid grid-cols-4 gap-2">
      <StatCard label="Revenue" value="₹86,420" delta="+12.4%" />
      <StatCard label="Invoices" value="1,284" delta="+8.1%" />
      <StatCard label="Customers" value="642" delta="+5.6%" />
      <StatCard label="Due" value="₹14,920" delta="-2.2%" />
    </div>
    <div className="grid sm:grid-cols-5 gap-2 mt-2 flex-1 min-h-0">
      <Panel title="Revenue Overview" right="This year" className="sm:col-span-3 flex flex-col">
        <MiniBars values={[32, 48, 40, 58, 50, 72, 62, 84, 76, 92, 80, 100]} className="h-24 flex-1" />
      </Panel>
      <div className="sm:col-span-2 space-y-2 min-h-0">
        <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-2.5 py-1.5 shadow-sm">
          <div>
            <Bar w="w-10" h="h-1.5" c="bg-gray-700" />
            <div className="mt-1">
              <Bar w="w-14" h="h-1" c="bg-gray-200" />
            </div>
          </div>
          <Chip c="bg-emerald-500/10 text-emerald-600">Paid</Chip>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-2.5 py-1.5 shadow-sm">
          <div>
            <Bar w="w-10" h="h-1.5" c="bg-indigo-500" />
            <div className="mt-1">
              <Bar w="w-14" h="h-1" c="bg-gray-200" />
            </div>
          </div>
          <Chip c="bg-amber-500/10 text-amber-600">GST</Chip>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-2.5 py-1.5 shadow-sm">
          <div>
            <Bar w="w-10" h="h-1.5" c="bg-gray-700" />
            <div className="mt-1">
              <Bar w="w-14" h="h-1" c="bg-gray-200" />
            </div>
          </div>
          <Chip c="bg-emerald-500/10 text-emerald-600">Paid</Chip>
        </div>
      </div>
    </div>
  </>
);

const EcommerceScene = () => (
  <>
    <div className="flex items-center gap-2 mb-2.5">
      <span className="size-4 rounded-md bg-gradient-to-br from-[#147AFF] to-[#5044E5]" />
      <Bar w="w-20" h="h-1.5" c="bg-gray-200" />
      <span className="ml-auto flex items-center gap-1 text-[8px] font-semibold text-gray-500">
        <Icon id="cart" className="w-3 h-3" /> Orders
      </span>
    </div>
    <div className="grid grid-cols-4 gap-2">
      <StatCard label="Sales" value="₹48.2k" delta="+18.9%" />
      <StatCard label="Orders" value="1,042" delta="+9.4%" />
      <StatCard label="Customers" value="386" delta="+6.1%" />
      <StatCard label="Conversion" value="3.8%" delta="+0.4%" />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2 flex-1 min-h-0">
      {[
        { icon: "web", name: "Minimal Chair", price: "₹129" },
        { icon: "store", name: "Home Desk", price: "₹349" },
        { icon: "globe", name: "LED Lamp", price: "₹59" },
        { icon: "card", name: "Bamboo Set", price: "₹89" },
      ].map((p) => (
        <div key={p.name} className="rounded-lg border border-gray-100 bg-white p-2 shadow-sm flex flex-col">
          <span className="h-10 rounded-md bg-gradient-to-br from-[#147AFF]/15 to-[#5044E5]/15 flex items-center justify-center text-[#5044E5]">
            <Icon id={p.icon} className="w-4 h-4" />
          </span>
          <p className="text-[8px] font-semibold text-gray-700 mt-1.5 truncate">{p.name}</p>
          <p className="text-[9px] font-bold text-[#5044E5]">{p.price}</p>
          <span className="mt-auto rounded-md bg-gradient-to-r from-[#147AFF] to-[#5044E5] text-white text-[7px] font-semibold text-center py-1">
            Add to Cart
          </span>
        </div>
      ))}
    </div>
  </>
);

const ClinicScene = () => (
  <>
    <div className="flex gap-2 mb-2.5">
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
        <div
          key={d}
          className={`flex-1 rounded-md border py-1.5 text-center ${
            i === 3
              ? "border-transparent bg-gradient-to-br from-[#147AFF] to-[#5044E5] text-white"
              : "border-gray-100 bg-white text-gray-400"
          }`}
        >
          <p className="text-[7px] font-semibold leading-none">{d}</p>
          <p className={`text-[8px] font-bold leading-none mt-0.5 ${i === 3 ? "text-white" : "text-gray-600"}`}>
            {10 + i}
          </p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
      <div className="space-y-2">
        {[
          { slot: "10:00", name: "Dr. Rahman", c: "bg-emerald-500/15 text-emerald-600" },
          { slot: "11:30", name: "Dr. Ahmed", c: "bg-sky-500/15 text-sky-600" },
          { slot: "13:00", name: "Dr. Karim", c: "bg-violet-500/15 text-violet-600" },
          { slot: "15:30", name: "Dr. Nusrat", c: "bg-amber-500/15 text-amber-600" },
        ].map((a) => (
          <div key={a.name} className="flex items-center gap-2 rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
            <span className="size-5 rounded-full bg-gradient-to-br from-[#147AFF]/25 to-[#5044E5]/25 flex items-center justify-center">
              <Icon id="users" className="w-3 h-3 text-[#5044E5]" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[8px] font-semibold text-gray-700 truncate">{a.name}</p>
              <p className="text-[7px] text-gray-400">Outpatient {a.slot}</p>
            </div>
            <Chip c={a.c}>{a.slot.slice(0, 5)}</Chip>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-gray-100 bg-white p-2.5 shadow-sm">
        <p className="text-[9px] font-semibold text-gray-700 mb-2">Today</p>
        {[
          { label: "Appointments", v: "24" },
          { label: "Patients", v: "31" },
          { label: "New", v: "6" },
        ].map((r) => (
          <div key={r.label} className="flex items-center justify-between border-b border-dashed border-gray-100 py-1.5 last:border-0">
            <span className="text-[8px] text-gray-400">{r.label}</span>
            <span className="text-[9px] font-bold text-gray-800">{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  </>
);

const AnalyticsScene = () => (
  <>
    <div className="grid grid-cols-4 gap-2">
      <StatCard label="Traffic" value="84.6k" delta="+21%" />
      <StatCard label="Leads" value="3,214" delta="+12%" />
      <StatCard label="Conversions" value="742" delta="+9%" />
      <StatCard label="Rank" value="#3" delta="+2" />
    </div>
    <div className="grid sm:grid-cols-5 gap-2 mt-2 flex-1 min-h-0">
      <Panel title="Organic Growth" right="SEO" className="sm:col-span-3 flex flex-col">
        <div className="flex-1 min-h-0">
          <MiniBars values={[22, 30, 26, 40, 34, 48, 44, 58, 66, 62, 82, 100]} className="h-24" />
        </div>
        <div className="flex items-center justify-between mt-2">
          <Bar w="w-16" h="h-wide" c="bg-gray-200" />
          <Chip c="bg-[#5044E5]/10 text-[#5044E5]">+146% YOY</Chip>
        </div>
      </Panel>
      <div className="sm:col-span-2 flex flex-col gap-2 min-h-0">
        <div className="rounded-lg border border-gray-100 bg-white p-2.5 shadow-sm">
          <p className="text-[9px] font-semibold text-gray-700 mb-1.5">Social Reach</p>
          {[
            { label: "Instagram", v: "68%", w: "w-full" },
            { label: "Facebook", v: "52%", w: "w-3/4" },
            { label: "LinkedIn", v: "38%", w: "w-1/2" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2 py-1">
              <span className="text-[8px] text-gray-400 w-14">{s.label}</span>
              <span className="flex-1 h-1 rounded-full bg-gray-100">
                <span className={`block h-1 rounded-full bg-gradient-to-r from-[#147AFF] to-[#5044E5] ${s.w}`} />
              </span>
              <span className="text-[8px] font-bold text-gray-700">{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

const ArchitectureScene = () => (
  <div className="flex flex-col items-center gap-2 flex-1 justify-center min-h-0 py-1">
    <div className="flex items-center justify-center gap-2 w-full">
      <div className="flex items-center gap-1.5 rounded-lg border border-gray-100 bg-white px-2.5 py-2 shadow-sm">
        <Icon id="web" className="w-3.5 h-3.5 text-[#4d8cea]" />
        <div>
          <p className="text-[8px] font-semibold text-gray-700">Frontend</p>
          <p className="text-[7px] text-gray-400">React · Next.js</p>
        </div>
      </div>
      <span className="hidden sm:block text-[10px] text-[#5044E5]">⇄</span>
      <div className="flex items-center gap-1.5 rounded-lg border border-gray-100 bg-white px-2.5 py-2 shadow-sm">
        <Icon id="server" className="w-3.5 h-3.5 text-[#5044E5]" />
        <div>
          <p className="text-[8px] font-semibold text-gray-700">Backend</p>
          <p className="text-[7px] text-gray-400">Node · APIs</p>
        </div>
      </div>
      <span className="hidden sm:block text-[10px] text-[#5044E5]">⇄</span>
      <div className="flex items-center gap-1.5 rounded-lg border border-gray-100 bg-white px-2.5 py-2 shadow-sm">
        <Icon id="database" className="w-3.5 h-3.5 text-[#147AFF]" />
        <div>
          <p className="text-[8px] font-semibold text-gray-700">Data</p>
          <p className="text-[7px] text-gray-400">Postgres · Redis</p>
        </div>
      </div>
    </div>
    <div className="w-full rounded-lg border border-gray-100 bg-gray-50 p-2 flex items-center gap-2">
      <span className="rounded-md bg-gradient-to-r from-[#147AFF] to-[#5044E5] text-white text-[7px] font-semibold px-1.5 py-0.5">
        BUILD
      </span>
      <Bar w="w-6" h="h-1" c="bg-gray-200" />
      <span className="text-[7px] text-gray-400">→</span>
      <span className="rounded-md bg-sky-500/15 text-sky-600 text-[7px] font-semibold px-1.5 py-0.5">
        TEST
      </span>
      <Bar w="w-6" h="h-1" c="bg-gray-200" />
      <span className="text-[7px] text-gray-400">→</span>
      <span className="rounded-md bg-emerald-500/15 text-emerald-600 text-[7px] font-semibold px-1.5 py-0.5">
        DEPLOY
      </span>
    </div>
  </div>
);

const MobileScene = () => (
  <div className="flex items-center justify-center gap-3 flex-1 min-h-0">
    {[
      { icon: "cart", label: "Shop" },
      { icon: "calendar", label: "Book" },
      { icon: "chart", label: "Track" },
    ].map((app, i) => (
      <div
        key={app.label}
        className={`w-16 sm:w-20 rounded-t-2xl rounded-b-xl border-2 border-gray-800 bg-white p-1.5 shadow-xl ${
          i === 1 ? "-translate-y-2" : ""
        }`}
      >
        <span className="mx-auto block w-4 h-1 rounded-full bg-gray-200 mb-1.5" />
        <span className="block h-10 sm:h-12 rounded-lg bg-gradient-to-br from-[#147AFF]/15 to-[#5044E5]/20 flex items-center justify-center text-[#5044E5]">
          <Icon id={app.icon} className="w-4 h-4" />
        </span>
        <p className="text-center text-[7px] font-semibold text-gray-700 mt-1.5">{app.label}</p>
        <span className="mt-1 block h-1 rounded-full bg-gradient-to-r from-[#147AFF] to-[#5044E5]" />
      </div>
    ))}
  </div>
);

const ApiScene = () => (
  <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
    <div className="space-y-1.5">
      {[
        { m: "GET", p: "/invoices", c: "bg-emerald-500/10 text-emerald-600" },
        { m: "POST", p: "/customers", c: "bg-sky-500/10 text-sky-600" },
        { m: "PUT", p: "/products/:id", c: "bg-amber-500/10 text-amber-600" },
        { m: "DELETE", p: "/orders/:id", c: "bg-rose-500/10 text-rose-600" },
      ].map((e) => (
        <div key={e.p} className="flex items-center gap-1.5 rounded-lg border border-gray-100 bg-white px-2 py-1.5 shadow-sm">
          <Chip c={e.c}>{e.m}</Chip>
          <span className="text-[8px] font-mono text-gray-600 truncate">{e.p}</span>
        </div>
      ))}
      <div className="rounded-lg border border-gray-100 bg-gray-50 p-2">
        <p className="text-[8px] text-gray-400 mb-1">Auth</p>
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-gradient-to-r from-[#147AFF] to-[#5044E5] text-white text-[7px] font-semibold px-1.5 py-0.5">
            JWT
          </span>
          <Bar w="w-10" h="h-1" c="bg-gray-200" />
          <span className="text-[7px] text-gray-400">2FA</span>
        </div>
      </div>
    </div>
    <div className="rounded-lg border border-gray-100 bg-gray-900 p-2.5 text-[7px] font-mono text-gray-300 shadow-sm min-h-0 overflow-hidden">
      <p className="text-pink-300">{"{ }"} invoices</p>
      <p className="text-gray-500">"status":</p>
      <p className="text-emerald-300"> "paid",</p>
      <p className="text-gray-500">"amount":</p>
      <p className="text-yellow-300"> 1240,</p>
      <p className="text-gray-500">"gst":</p>
      <p className="text-yellow-300"> 223,</p>
      <p className="text-gray-500">"customer":</p>
      <p className="text-indigo-300"> {`{ id, name }`}</p>
      <span className="inline-block mt-1 rounded bg-[#5044E5] px-1.5 py-0.5 text-white">200 ✓</span>
    </div>
  </div>
);

const CloudScene = () => (
  <>
    <div className="grid grid-cols-3 gap-2">
      {[
        { icon: "server", label: "App Server" },
        { icon: "database", label: "Database" },
        { icon: "cloud", label: "CDN" },
      ].map((n) => (
        <div key={n.label} className="rounded-lg border border-gray-100 bg-white p-2.5 shadow-sm text-center">
          <span className="size-6 mx-auto rounded-md bg-gradient-to-br from-[#147AFF]/15 to-[#5044E5]/15 flex items-center justify-center text-[#5044E5]">
            <Icon id={n.icon} className="w-3.5 h-3.5" />
          </span>
          <p className="text-[8px] font-semibold text-gray-700 mt-1.5">{n.label}</p>
          <Bar w="w-8 mx-auto" h="h-1" c="bg-gray-200" />
        </div>
      ))}
    </div>
    <div className="mt-2 rounded-lg border border-gray-100 bg-gray-50 p-2.5 flex flex-col gap-1.5 flex-1 min-h-0">
      <div className="flex items-center gap-2">
        <span className="rounded bg-gray-800 text-white text-[7px] font-semibold px-1.5 py-0.5">CI</span>
        <Bar w="w-10" h="h-1" c="bg-gray-200" />
        <span className="text-[7px] text-gray-400">push → build → test</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="rounded bg-emerald-500/15 text-emerald-600 text-[7px] font-semibold px-1.5 py-0.5">●</span>
        <span className="text-[8px] font-semibold text-gray-700">production.rusobrostech.com</span>
        <span className="ml-auto"><Chip c="bg-emerald-500/10 text-emerald-600">Live</Chip></span>
      </div>
      <div className="flex items-center gap-2">
        <span className="rounded bg-sky-500/15 text-sky-600 text-[7px] font-semibold px-1.5 py-0.5">SSL</span>
        <span className="text-[8px] text-gray-600">certificates renewed</span>
        <span className="ml-auto text-[8px] font-bold text-gray-700">99.9%</span>
      </div>
    </div>
  </>
);

const DesignScene = () => (
  <>
    <div className="grid grid-cols-5 gap-2 mb-2.5">
      {["#147AFF", "#5044E5", "#4d8cea", "#38bdf8", "#0f172a"].map((c) => (
        <div key={c} className="flex flex-col items-center gap-1">
          <span className="w-full h-7 rounded-md border border-black/5" style={{ background: c }} />
          <span className="w-8 h-1 rounded-full bg-gray-200" />
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
      <div className="space-y-1.5">
        <div className="rounded-lg border border-gray-100 bg-white p-2 shadow-sm">
          <Bar w="w-16" h="h-2" c="bg-gray-700" />
          <div className="mt-1.5 space-y-1">
            <Bar w="w-full" h="h-1" c="bg-gray-200" />
            <Bar w="w-4/5" h="h-1" c="bg-gray-200" />
          </div>
          <span className="inline-block mt-1.5 rounded-md bg-gradient-to-r from-[#147AFF] to-[#5044E5] text-white text-[7px] font-semibold px-2 py-0.5">
            CTA
          </span>
        </div>
        <div className="rounded-lg border border-gray-100 bg-white p-2 shadow-sm flex items-center gap-1.5">
          <span className="size-5 rounded-full bg-gradient-to-br from-[#147AFF] to-[#5044E5]" />
          <div>
            <Bar w="w-10" h="h-1.5" c="bg-gray-600" />
            <Bar w="w-14" h="h-1" c="bg-gray-200" />
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-gray-100 bg-white p-2.5 shadow-sm flex flex-col gap-1.5 min-h-0">
        <p className="text-[8px] font-semibold text-gray-700">Typography</p>
        <p className="text-[12px] font-bold text-gray-900">Aa Bh</p>
        <div className="space-y-1">
          <Bar w="w-full" h="h-1.5" c="bg-gray-300" />
          <Bar w="w-3/4" h="h-1" c="bg-gray-200" />
          <span className="block h-1 w-1/2 rounded-full bg-gradient-to-r from-[#147AFF] to-[#5044E5]" />
        </div>
      </div>
    </div>
  </>
);

const DataScene = () => (
  <>
    <div className="flex items-center gap-1.5 mb-2.5">
      {["users", "orders", "invoices", "products"].map((t, i) => (
        <span
          key={t}
          className={`rounded-md px-2 py-1 text-[8px] font-semibold ${
            i === 2 ? "bg-gradient-to-r from-[#147AFF] to-[#5044E5] text-white" : "bg-gray-100 text-gray-500"
          }`}
        >
          {t}
        </span>
      ))}
    </div>
    <div className="rounded-lg border border-gray-100 overflow-hidden shadow-sm flex-1 min-h-0 flex flex-col">
      <div className="flex items-center gap-2 bg-gray-50 px-2.5 py-1.5 border-b border-gray-100">
        {["id", "name", "total", "status", "date"].map((h) => (
          <span key={h} className="flex-1 text-[7px] font-semibold uppercase text-gray-400">{h}</span>
        ))}
      </div>
      {[
        ["#001", "INV-2401", "₹1,240", "Paid"],
        ["#002", "INV-2402", "₹860", "Pending"],
        ["#003", "INV-2403", "₹2,150", "Paid"],
      ].map((r, i) => (
        <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 border-b border-gray-50 last:border-0">
          <span className="flex-1 text-[8px] font-mono text-gray-500">{r[0]}</span>
          <span className="flex-1 text-[8px] font-semibold text-gray-700">{r[1]}</span>
          <span className="flex-1 text-[8px] font-bold text-gray-800">{r[2]}</span>
          <span className="flex-1">
            <Chip c={r[3] === "Paid" ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600"}>
              {r[3]}
            </Chip>
          </span>
          <span className="flex-1 text-[7px] text-gray-400">18 Sep</span>
        </div>
      ))}
    </div>
  </>
);

const EditorScene = () => (
  <>
    <div className="flex items-center gap-2 mb-2.5">
      <Bar w="w-24" h="h-1.5" c="bg-gray-600" />
      <span className="ml-auto flex items-center gap-1">
        <span className="size-2 rounded-full bg-emerald-500" />
        <span className="text-[8px] font-semibold text-emerald-600">Saving…</span>
      </span>
    </div>
    <div className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm flex-1 min-h-0">
      <Bar w="w-1/2" h="h-2.5" c="bg-gray-700" />
      <div className="mt-2 space-y-1.5">
        <Bar w="w-full" h="h-1" c="bg-gray-200" />
        <Bar w="w-11/12" h="h-1" c="bg-gray-200" />
        <Bar w="w-5/6" h="h-1" c="bg-gray-200" />
        <span className="block h-1 w-2/3 rounded-full bg-[#5044E5]/40" />
      </div>
      <div className="mt-2.5 flex items-center gap-2 pt-2 border-t border-dashed border-gray-100">
        <span className="size-4 rounded-full bg-gradient-to-br from-[#147AFF] to-[#5044E5]" />
        <span className="size-4 rounded-full bg-[#38bdf8]" />
        <Bar w="w-10" h="h-1" c="bg-gray-200" />
        <span className="ml-auto text-[8px] text-gray-400">3 collaborators online</span>
      </div>
    </div>
  </>
);

const BusinessScene = () => (
  <>
    <div className="grid grid-cols-4 gap-2">
      <StatCard label="Orders" value="1,842" delta="+11%" />
      <StatCard label="Inventory" value="9,310" delta="-3%" bar />
      <StatCard label="Open Deals" value="127" delta="+16%" />
      <StatCard label="Invoices" value="₹72.4k" delta="+8%" />
    </div>
    <div className="grid sm:grid-cols-5 gap-2 mt-2 flex-1 min-h-0">
      <Panel title="Sales Pipeline" right="CRM" className="sm:col-span-3 flex flex-col">
        {[
          { label: "Lead", v: "42", w: "w-2/5" },
          { label: "Qualified", v: "58", w: "w-3/5" },
          { label: "Proposal", v: "74", w: "w-3/4" },
          { label: "Closed", v: "92", w: "w-full" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-2 py-1">
            <span className="text-[8px] text-gray-400 w-16">{s.label}</span>
            <span className="flex-1 h-1.5 rounded-full bg-gray-100">
              <span className={`block h-1.5 rounded-full bg-gradient-to-r from-[#147AFF] to-[#5044E5] ${s.w}`} />
            </span>
            <span className="text-[8px] font-bold text-gray-700">{s.v}</span>
          </div>
        ))}
      </Panel>
      <div className="sm:col-span-2 rounded-lg border border-gray-100 bg-white p-2.5 shadow-sm">
        <p className="text-[9px] font-semibold text-gray-700 mb-1.5">Operations</p>
        <div className="space-y-1.5">
          {[
            { label: "Invoices due", v: "18" },
            { label: "Low stock alerts", v: "4" },
            { label: "Pending approvals", v: "6" },
          ].map((o) => (
            <div key={o.label} className="flex items-center justify-between rounded-md bg-gray-50 px-2 py-1.5">
              <span className="text-[8px] text-gray-500">{o.label}</span>
              <span className="text-[8px] font-bold text-[#5044E5]">{o.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

const SaaSScene = () => (
  <>
    <div className="grid grid-cols-4 gap-2">
      <StatCard label="MRR" value="₹38.4k" delta="+15%" />
      <StatCard label="Subscribers" value="1,204" delta="+7%" />
      <StatCard label="Churn" value="2.1%" delta="-0.4%" />
      <StatCard label="LTV" value="₹612" delta="+5%" />
    </div>
    <div className="mt-2 grid sm:grid-cols-2 gap-2 flex-1 min-h-0">
      <div className="rounded-lg border border-gray-100 bg-white p-2.5 shadow-sm">
        <p className="text-[8px] font-semibold text-gray-700 mb-1.5">Plan Distribution</p>
        {[
          { label: "Basic", v: "62%", w: "w-[62%]" },
          { label: "Pro", v: "27%", w: "w-[27%]" },
          { label: "Enterprise", v: "11%", w: "w-[11%]" },
        ].map((p) => (
          <div key={p.label} className="flex items-center gap-2 py-0.5">
            <span className="text-[8px] text-gray-400 w-14">{p.label}</span>
            <span className="flex-1 h-1.5 rounded-full bg-gray-100">
              <span className={`block h-1.5 rounded-full bg-gradient-to-r from-[#147AFF] to-[#5044E5] ${p.w}`} />
            </span>
            <span className="text-[8px] font-bold text-gray-700">{p.v}</span>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-gray-100 bg-gray-50 p-2.5 shadow-sm flex flex-col justify-between">
        <p className="text-[8px] font-semibold text-gray-700 mb-1.5">Revenue by month</p>
        <MiniBars values={[30, 42, 38, 55, 62, 58, 76, 84, 92, 100]} className="h-16" />
      </div>
    </div>
  </>
);

/* ------------------------------------------------------------------ */
/*  Dispatcher                                                        */
/* ------------------------------------------------------------------ */

const scenes = {
  billing: BillingScene,
  ecommerce: EcommerceScene,
  clinic: ClinicScene,
  analytics: AnalyticsScene,
  architecture: ArchitectureScene,
  mobile: MobileScene,
  api: ApiScene,
  cloud: CloudScene,
  design: DesignScene,
  data: DataScene,
  editor: EditorScene,
  business: BusinessScene,
  saas: SaaSScene,
};

export const UIMockup = ({ type = "billing", label, className = "w-full" }) => {
  const Scene = scenes[type] || BillingScene;
  const frameLabel = label || {
    billing: "Billing & Business Management",
    ecommerce: "eCommerce Platform",
    clinic: "Clinic Appointment Management",
    analytics: "Growth Analytics",
    architecture: "Full-Stack Architecture",
    mobile: "Mobile Applications",
    api: "API & Integrations",
    cloud: "Cloud & Deployment",
    design: "UI/UX Design System",
    data: "Database Layer",
    editor: "Collaborative Editor",
    business: "Business Operations",
    saas: "SaaS Platform",
  }[type];

  return (
    <Window label={frameLabel} className={className}>
      <Scene />
    </Window>
  );
};

export default UIMockup;
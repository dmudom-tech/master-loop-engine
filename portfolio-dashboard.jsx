import React, { useState, useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";
import { LayoutGrid, Bell, ShieldAlert, Activity, TrendingUp, TrendingDown, Radar, Clock } from "lucide-react";

// ---------- Mock data (stand-in for live SET/TFEX feed) ----------
const HOLDINGS = [
  { ticker: "PTT",    name: "PTT PCL",             shares: 2000, avgCost: 34.50, price: 33.75 },
  { ticker: "AOT",    name: "Airports of Thailand", shares: 800,  avgCost: 62.00, price: 65.50 },
  { ticker: "CPALL",  name: "CP All PCL",           shares: 500,  avgCost: 58.25, price: 56.00 },
  { ticker: "KBANK",  name: "Kasikornbank",         shares: 300,  avgCost: 138.00, price: 145.50 },
  { ticker: "ADVANC", name: "AIS",                  shares: 400,  avgCost: 205.00, price: 218.00 },
  { ticker: "DELTA",  name: "Delta Electronics",    shares: 150,  avgCost: 78.00,  price: 71.25 },
];

const SIGNALS = [
  { ticker: "KBANK",  type: "buy",  rule: "RSI(14) < 30, ตัดขึ้นเหนือ MA20", time: "09:42" },
  { ticker: "DELTA",  type: "sell", rule: "หลุด support 72.00, volume พุ่ง 2.1x", time: "10:15" },
  { ticker: "AOT",    type: "watch", rule: "ใกล้แนวต้าน 66.00", time: "11:03" },
  { ticker: "CPALL",  type: "sell", rule: "MACD ตัดลงใต้เส้น signal", time: "13:20" },
];

const EQUITY_CURVE = [
  { m: "ม.ค.", value: 1000000 }, { m: "ก.พ.", value: 1042000 }, { m: "มี.ค.", value: 1018000 },
  { m: "เม.ย.", value: 1085000 }, { m: "พ.ค.", value: 1071000 }, { m: "มิ.ย.", value: 1134000 },
  { m: "ก.ค.", value: 1122000 },
];

const MONTHLY_RETURNS = [
  { m: "ม.ค.", r: 4.2 }, { m: "ก.พ.", r: -2.3 }, { m: "มี.ค.", r: 6.6 },
  { m: "เม.ย.", r: -1.3 }, { m: "พ.ค.", r: 5.9 }, { m: "มิ.ย.", r: -1.1 },
];

const fmt = (n) => n.toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtInt = (n) => n.toLocaleString("th-TH");

export default function Dashboard() {
  const [tab, setTab] = useState("portfolio");

  const rows = useMemo(() => HOLDINGS.map(h => {
    const cost = h.shares * h.avgCost;
    const value = h.shares * h.price;
    const pnl = value - cost;
    const pnlPct = (pnl / cost) * 100;
    return { ...h, cost, value, pnl, pnlPct };
  }), []);

  const totals = useMemo(() => {
    const cost = rows.reduce((a, r) => a + r.cost, 0);
    const value = rows.reduce((a, r) => a + r.value, 0);
    return { cost, value, pnl: value - cost, pnlPct: ((value - cost) / cost) * 100 };
  }, [rows]);

  return (
    <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", background: "#0A0D12", minHeight: "100vh", color: "#EDF1F7" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600;700&family=Noto+Sans+Thai:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; font-family: 'Noto Sans Thai', 'IBM Plex Sans', sans-serif; }
        .mono { font-family: 'IBM Plex Mono', monospace; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse-dot { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        .loop-ring { animation: spin-slow 6s linear infinite; }
        .pulse-dot { animation: pulse-dot 1.6s ease-in-out infinite; }
        .tab-btn { transition: all 0.15s ease; }
        .row-hover:hover { background: #171C27 !important; }
      `}</style>

      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 24px", borderBottom: "1px solid #232938", background: "#0D1017" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ position: "relative", width: 34, height: 34 }}>
            <svg className="loop-ring" width="34" height="34" viewBox="0 0 34 34">
              <circle cx="17" cy="17" r="14" fill="none" stroke="#5B8DEF" strokeWidth="2" strokeDasharray="6 5" opacity="0.8" />
            </svg>
            <div className="pulse-dot" style={{ position: "absolute", top: "50%", left: "50%", width: 7, height: 7, borderRadius: "50%", background: "#5B8DEF", transform: "translate(-50%,-50%)" }} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15, letterSpacing: 0.5 }}>MASTER LOOP ENGINE</div>
            <div className="mono" style={{ fontSize: 11, color: "#7E8A9E" }}>Portfolio Operating System · SET / TFEX</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div style={{ textAlign: "right" }}>
            <div className="mono" style={{ fontSize: 11, color: "#7E8A9E" }}>SET INDEX</div>
            <div className="mono" style={{ fontSize: 15, fontWeight: 600, color: "#2FBF8F" }}>1,342.18 <span style={{ fontSize: 12 }}>+0.64%</span></div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#7E8A9E", fontSize: 12 }}>
            <Clock size={13} /> <span className="mono">รอบสแกนล่าสุด 14:32:07</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div style={{ width: 200, borderRight: "1px solid #232938", padding: "20px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
          {[
            { id: "portfolio", label: "พอร์ตการลงทุน", icon: LayoutGrid },
            { id: "signals", label: "สัญญาณซื้อขาย", icon: Bell },
            { id: "risk", label: "บริหารความเสี่ยง", icon: ShieldAlert },
            { id: "backtest", label: "Backtest กลยุทธ์", icon: Activity },
          ].map(item => {
            const Icon = item.icon;
            const active = tab === item.id;
            return (
              <button key={item.id} className="tab-btn" onClick={() => setTab(item.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8,
                  border: "none", cursor: "pointer", textAlign: "left", fontSize: 13.5,
                  background: active ? "#171C27" : "transparent",
                  color: active ? "#EDF1F7" : "#7E8A9E",
                  borderLeft: active ? "2px solid #5B8DEF" : "2px solid transparent",
                }}>
                <Icon size={16} /> {item.label}
              </button>
            );
          })}
        </div>

        {/* Main */}
        <div style={{ flex: 1, padding: 24 }}>
          {tab === "portfolio" && <Portfolio rows={rows} totals={totals} />}
          {tab === "signals" && <Signals />}
          {tab === "risk" && <Risk />}
          {tab === "backtest" && <Backtest />}
        </div>
      </div>
    </div>
  );
}

function Card({ label, value, sub, color }) {
  return (
    <div style={{ background: "#12161F", border: "1px solid #232938", borderRadius: 10, padding: "16px 18px", flex: 1 }}>
      <div style={{ fontSize: 12, color: "#7E8A9E", marginBottom: 6 }}>{label}</div>
      <div className="mono" style={{ fontSize: 20, fontWeight: 600, color: color || "#EDF1F7" }}>{value}</div>
      {sub && <div className="mono" style={{ fontSize: 12, color: color || "#7E8A9E", marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

function Portfolio({ rows, totals }) {
  const pnlColor = totals.pnl >= 0 ? "#2FBF8F" : "#EF5B5B";
  return (
    <div>
      <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
        <Card label="มูลค่าพอร์ตรวม" value={`฿${fmt(totals.value)}`} />
        <Card label="ต้นทุนรวม" value={`฿${fmt(totals.cost)}`} />
        <Card label="กำไร/ขาดทุนรวม" value={`${totals.pnl >= 0 ? "+" : ""}฿${fmt(totals.pnl)}`} sub={`${totals.pnlPct >= 0 ? "+" : ""}${fmt(totals.pnlPct)}%`} color={pnlColor} />
      </div>
      <div style={{ background: "#12161F", border: "1px solid #232938", borderRadius: 10, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #232938", color: "#7E8A9E", textAlign: "left" }}>
              {["หุ้น", "จำนวนหุ้น", "ราคาทุนเฉลี่ย", "ราคาปัจจุบัน", "มูลค่า", "กำไร/ขาดทุน", "%"].map(h => (
                <th key={h} style={{ padding: "10px 16px", fontWeight: 500 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(r => {
              const up = r.pnl >= 0;
              return (
                <tr key={r.ticker} className="row-hover" style={{ borderBottom: "1px solid #1B2029" }}>
                  <td style={{ padding: "12px 16px" }}>
                    <div style={{ fontWeight: 600 }}>{r.ticker}</div>
                    <div style={{ fontSize: 11.5, color: "#7E8A9E" }}>{r.name}</div>
                  </td>
                  <td className="mono" style={{ padding: "12px 16px" }}>{fmtInt(r.shares)}</td>
                  <td className="mono" style={{ padding: "12px 16px" }}>{fmt(r.avgCost)}</td>
                  <td className="mono" style={{ padding: "12px 16px" }}>{fmt(r.price)}</td>
                  <td className="mono" style={{ padding: "12px 16px" }}>฿{fmt(r.value)}</td>
                  <td className="mono" style={{ padding: "12px 16px", color: up ? "#2FBF8F" : "#EF5B5B" }}>
                    {up ? "+" : ""}฿{fmt(r.pnl)}
                  </td>
                  <td className="mono" style={{ padding: "12px 16px", color: up ? "#2FBF8F" : "#EF5B5B", display: "flex", alignItems: "center", gap: 4 }}>
                    {up ? <TrendingUp size={13} /> : <TrendingDown size={13} />} {fmt(r.pnlPct)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: 12, color: "#5A6478", marginTop: 14 }}>* ข้อมูลตัวอย่างสำหรับสาธิต — ของจริงต้องต่อ API ราคาหุ้นแบบเรียลไทม์</p>
    </div>
  );
}

function Signals() {
  const cfg = {
    buy: { color: "#2FBF8F", label: "ซื้อ" },
    sell: { color: "#EF5B5B", label: "ขาย" },
    watch: { color: "#F2B84B", label: "เฝ้าดู" },
  };
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, color: "#7E8A9E", fontSize: 13 }}>
        <Radar size={15} /> สแกนสัญญาณล่าสุด — อัปเดตทุก 5 นาทีในระบบจริง
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {SIGNALS.map((s, i) => (
          <div key={i} style={{ background: "#12161F", border: "1px solid #232938", borderLeft: `3px solid ${cfg[s.type].color}`, borderRadius: 8, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontWeight: 600 }}>{s.ticker}</span>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: `${cfg[s.type].color}22`, color: cfg[s.type].color, fontWeight: 600 }}>{cfg[s.type].label}</span>
              </div>
              <div style={{ fontSize: 12.5, color: "#7E8A9E", marginTop: 4 }}>{s.rule}</div>
            </div>
            <div className="mono" style={{ fontSize: 12, color: "#5A6478" }}>{s.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Risk() {
  const [account, setAccount] = useState(1000000);
  const [riskPct, setRiskPct] = useState(1);
  const [entry, setEntry] = useState(65.5);
  const [stop, setStop] = useState(63.0);

  const riskAmount = account * (riskPct / 100);
  const perShareRisk = Math.max(entry - stop, 0.01);
  const shares = Math.floor(riskAmount / perShareRisk);
  const positionValue = shares * entry;
  const positionPct = (positionValue / account) * 100;

  const Field = ({ label, value, onChange, step = 1 }) => (
    <div style={{ marginBottom: 16 }}>
      <label style={{ fontSize: 12.5, color: "#7E8A9E", display: "block", marginBottom: 6 }}>{label}</label>
      <input type="number" value={value} step={step} onChange={e => onChange(parseFloat(e.target.value) || 0)}
        className="mono"
        style={{ width: "100%", background: "#0D1017", border: "1px solid #232938", borderRadius: 7, padding: "9px 12px", color: "#EDF1F7", fontSize: 14 }} />
    </div>
  );

  return (
    <div style={{ display: "flex", gap: 24 }}>
      <div style={{ width: 320, background: "#12161F", border: "1px solid #232938", borderRadius: 10, padding: 20 }}>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 16 }}>คำนวณขนาดตำแหน่ง (Position Sizing)</div>
        <Field label="เงินทุนในพอร์ต (บาท)" value={account} onChange={setAccount} step={1000} />
        <Field label="ความเสี่ยงต่อไม้ (%)" value={riskPct} onChange={setRiskPct} step={0.1} />
        <Field label="ราคาเข้าซื้อ" value={entry} onChange={setEntry} step={0.25} />
        <Field label="จุดตัดขาดทุน (Stop-loss)" value={stop} onChange={setStop} step={0.25} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", gap: 14 }}>
          <Card label="จำนวนหุ้นที่ควรซื้อ" value={`${fmtInt(shares)} หุ้น`} color="#5B8DEF" />
          <Card label="เงินเสี่ยงสูงสุด" value={`฿${fmt(riskAmount)}`} color="#F2B84B" />
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          <Card label="มูลค่าตำแหน่ง" value={`฿${fmt(positionValue)}`} sub={`${fmt(positionPct)}% ของพอร์ต`} />
          <Card label="ความเสี่ยงต่อหุ้น" value={`฿${fmt(perShareRisk)}`} />
        </div>
        <div style={{ background: "#12161F", border: "1px solid #232938", borderRadius: 10, padding: 18, fontSize: 12.5, color: "#7E8A9E", lineHeight: 1.7 }}>
          กฎ: จำนวนหุ้น = (เงินทุน × %ความเสี่ยง) ÷ (ราคาเข้า − จุดตัดขาดทุน) — วิธีนี้ทำให้ทุกไม้เทรดเสี่ยงเท่ากันเป็นสัดส่วนของพอร์ต ไม่ว่าหุ้นจะราคาสูงหรือต่ำ
        </div>
      </div>
    </div>
  );
}

function Backtest() {
  return (
    <div>
      <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
        <Card label="Win Rate" value="58.3%" color="#2FBF8F" />
        <Card label="ผลตอบแทนสะสม" value="+12.2%" color="#2FBF8F" />
        <Card label="Max Drawdown" value="-6.8%" color="#EF5B5B" />
        <Card label="Sharpe Ratio" value="1.34" />
      </div>
      <div style={{ background: "#12161F", border: "1px solid #232938", borderRadius: 10, padding: 20, marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 14 }}>Equity Curve (ตัวอย่างจำลอง 7 เดือน)</div>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={EQUITY_CURVE}>
            <CartesianGrid stroke="#1B2029" vertical={false} />
            <XAxis dataKey="m" stroke="#5A6478" fontSize={12} />
            <YAxis stroke="#5A6478" fontSize={12} tickFormatter={v => `${(v/1000000).toFixed(2)}M`} />
            <Tooltip contentStyle={{ background: "#0D1017", border: "1px solid #232938", fontSize: 12 }} formatter={v => `฿${fmt(v)}`} />
            <Line type="monotone" dataKey="value" stroke="#5B8DEF" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={{ background: "#12161F", border: "1px solid #232938", borderRadius: 10, padding: 20 }}>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 14 }}>ผลตอบแทนรายเดือน (%)</div>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={MONTHLY_RETURNS}>
            <CartesianGrid stroke="#1B2029" vertical={false} />
            <XAxis dataKey="m" stroke="#5A6478" fontSize={12} />
            <YAxis stroke="#5A6478" fontSize={12} />
            <Tooltip contentStyle={{ background: "#0D1017", border: "1px solid #232938", fontSize: 12 }} formatter={v => `${v}%`} />
            <Bar dataKey="r" radius={[4,4,0,0]}>
              {MONTHLY_RETURNS.map((d, i) => <Cell key={i} fill={d.r >= 0 ? "#2FBF8F" : "#EF5B5B"} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p style={{ fontSize: 12, color: "#5A6478", marginTop: 14 }}>* ตัวเลขสาธิตเท่านั้น — backtest จริงต้องใช้ข้อมูลราคาย้อนหลังจริงและ engine คำนวณแยกต่างหาก</p>
    </div>
  );
}

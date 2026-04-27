const products = [
  { "category": "SƠN GỖ", "name": "Keo Trám Trét 1K (Wood Filler)", "prices": { "1kg": 100440, "5kg": 498960, "20kg": 2376000 } },
  { "category": "SƠN GỖ", "name": "Lót Trong Suốt 1K (Sanding Sealer)", "prices": { "1kg": 159840, "5kg": 712800, "20kg": 2700000 } },
  { "category": "SƠN GỖ", "name": "Lót Trắng 1K (White Wood Primer)", "prices": { "1kg": 159840, "5kg": 712800, "20kg": 2692440 } },
  { "category": "SƠN GỖ", "name": "Sơn Lau Gỗ 1K (Wood Stain)", "prices": { "1kg": 205200, "5kg": 950400, "20kg": 3641760 } },
  { "category": "SƠN GỖ", "name": "Màu Bệt Trong Nhà 1K (Wood Paint Interior)", "prices": { "1kg": 253800, "5kg": 1215000, "20kg": 4644000 } },
  { "category": "SƠN GỖ", "name": "Sơn 2in1 Trong Nhà 1K (Finish Interior)", "prices": { "1kg": 248400, "5kg": 1188000, "20kg": 4536000 } },
  { "category": "SƠN GỖ", "name": "Phủ Bóng Lacquer Trong Nhà 1K", "prices": { "1kg": 205200, "5kg": 972000, "20kg": 3672000 } },
  { "category": "SƠN GỖ", "name": "Màu Bệt Ngoài Trời 1K (Wood Paint Exterior)", "prices": { "1kg": 318600, "5kg": 1539000, "20kg": 5940000 } },
  { "category": "SƠN GỖ", "name": "Sơn 2in1 Ngoài Trời 1K (Finish Exterior)", "prices": { "1kg": 313200, "5kg": 1512000, "20kg": 5832000 } },
  { "category": "SƠN GỖ", "name": "Phủ Bóng Lacquer Ngoài Trời 1K", "prices": { "1kg": 237600, "5kg": 1069200, "20kg": 4039200 } },
  { "category": "KIM LOẠI (1K)", "name": "Lót Kim Loại Chống Gỉ (Metal Primer) (LMCP)", "prices": { "1kg": 217080, "5kg": 986040, "20kg": 3723840 } },
  { "category": "KIM LOẠI (1K)", "name": "Metal Coat Finish giả gỗ (LWF)", "prices": { "1kg": 297000, "5kg": 1366200, "20kg": 5303880 } },
  { "category": "SƠN GIẢ GỖ XI MĂNG", "name": "Lót Giả Gỗ Tấm Xi Măng (Fiber Cement Wood Primer)", "prices": { "1kg": 198000, "3.5kg": 682000 } },
  { "category": "SƠN GIẢ GỖ XI MĂNG", "name": "Màu Giả Gỗ Vách/Trần Tấm Xi Măng (Fiber Cement Plank Paint)", "prices": { "1kg": 297000, "3.5kg": 1028500 } },
  { "category": "SƠN GIẢ GỖ XI MĂNG", "name": "Phủ Bóng Vách/Trần Tấm Xi Măng (Fiber Cement Shield)", "prices": { "1kg": 192500, "3.5kg": 662200 } },
  { "category": "HỆ 2K", "name": "Sơn 2in1 Trong Nhà 2K (Finish MX83)", "prices": { "1kg": 205200, "5kg": 972000, "20kg": 3672000 }, "hasHardener": true, "hardenerRatio": 0.15 },
  { "category": "HỆ 2K", "name": "Sơn 2in1 Ngoài Trời 2K (Finish MX83)", "prices": { "1kg": 234360, "5kg": 1117800, "20kg": 4255200 }, "hasHardener": true, "hardenerRatio": 0.15 },
  { "category": "HỆ 2K", "name": "Lót Trắng 2K (MX83 Nội Thất)", "prices": { "1kg": 183600, "5kg": 891000, "20kg": 3456000 }, "hasHardener": true, "hardenerRatio": 0.15 },
  { "category": "HỆ 2K", "name": "Lót Trắng 2K (MX83 Ngoại Thất)", "prices": { "1kg": 213600, "5kg": 1041000, "20kg": 4056000 }, "hasHardener": true, "hardenerRatio": 0.15 },
  { "category": "HỆ 2K", "name": "Màu Bệt Trong Nhà 2K (Wood Paint MX83)", "prices": { "1kg": 210600, "5kg": 999000, "20kg": 3780000 }, "hasHardener": true, "hardenerRatio": 0.15 },
  { "category": "HỆ 2K", "name": "Màu Bệt Ngoài Trời 2K (Wood Paint MX83)", "prices": { "1kg": 239760, "5kg": 1144800, "20kg": 4363200 }, "hasHardener": true, "hardenerRatio": 0.15 },
  { "category": "HỆ 2K", "name": "Chất đóng rắn 2K (Hardener)", "prices": { "1kg": 480000, "5kg": 2300000 } }
];

const YIELDS = { 'phun': 5, 'lau': 10, 'quet': 8 };

const PROCESSES = {
    'lau': { name: "Sơn giữ vân gỗ (Lau)", paletteImg: "palette-lau.png", layers: [{ step: 1, name: "Sơn Lau Gỗ 1K (Wood Stain)", method: 'lau', defaultLayers: 2, currentLayers: 2 }, { step: 2, name: "Lót Trong Suốt 1K (Sanding Sealer)", method: 'phun', defaultLayers: 1, currentLayers: 1 }, { step: 3, name: "Phủ Bóng Lacquer Trong Nhà 1K", method: 'phun', defaultLayers: 1, currentLayers: 1, outdoorName: "Phủ Bóng Lacquer Ngoài Trời 1K" }] },
    'phun': { name: "Sơn giữ vân gỗ (Phun)", paletteImg: "palette-phun.png", layers: [{ step: 1, name: "Lót Trong Suốt 1K (Sanding Sealer)", method: 'phun', defaultLayers: 1, currentLayers: 1 }, { step: 2, name: "Sơn 2in1 Trong Nhà 1K (Finish Interior)", method: 'phun', defaultLayers: 1, currentLayers: 1, outdoorName: "Sơn 2in1 Ngoài Trời 1K (Finish Exterior)" }] },
    'bet': { name: "Sơn màu bệt (MDF/Gỗ tự nhiên)", paletteImg: "palette-bet.png", layers: [{ step: 1, name: "Lót Trắng 1K (White Wood Primer)", method: 'phun', defaultLayers: 1, currentLayers: 1 }, { step: 2, name: "Màu Bệt Trong Nhà 1K (Wood Paint Interior)", method: 'phun', defaultLayers: 1, currentLayers: 1, outdoorName: "Màu Bệt Ngoài Trời 1K (Wood Paint Exterior)" }, { step: 3, name: "Phủ Bóng Lacquer Trong Nhà 1K", method: 'phun', defaultLayers: 1, currentLayers: 1, outdoorName: "Phủ Bóng Lacquer Ngoài Trời 1K", optional: true }] },
    'sat': { name: "Sơn giả gỗ trên sắt", paletteImg: "palette-sat.png", layers: [{ step: 1, name: "Lót Kim Loại Chống Gỉ (Metal Primer) (LMCP)", method: 'phun', defaultLayers: 1, currentLayers: 1 }, { step: 2, name: "Metal Coat Finish giả gỗ (LWF)", method: 'quet', defaultLayers: 2, currentLayers: 2 }, { step: 3, name: "Phủ Bóng Lacquer Ngoài Trời 1K", method: 'phun', defaultLayers: 1, currentLayers: 1, isOutdoorOnly: true, optional: true }] },
    'ximang': { name: "Sơn giả gỗ xi măng", paletteImg: "palette-ximang.png", layers: [{ step: 1, name: "Lót Giả Gỗ Tấm Xi Măng (Fiber Cement Wood Primer)", method: 'quet', defaultLayers: 1, currentLayers: 1 }, { step: 2, name: "Màu Giả Gỗ Vách/Trần Tấm Xi Măng (Fiber Cement Plank Paint)", method: 'quet', defaultLayers: 2, currentLayers: 2 }, { step: 3, name: "Phủ Bóng Vách/Trần Tấm Xi Măng (Fiber Cement Shield)", method: 'quet', defaultLayers: 1, currentLayers: 1, optional: 'indoorOnly' }] },
    '2k': { name: "Sơn giữ vân gỗ (hệ 2K)", paletteImg: "palette-2k-vun.png", layers: [{ step: 1, name: "Sơn 2in1 Trong Nhà 2K (Finish MX83)", method: 'phun', defaultLayers: 2, currentLayers: 2, outdoorName: "Sơn 2in1 Ngoài Trời 2K (Finish MX83)" }] },
    'bet2k': { name: "Sơn màu bệt 2K (MDF/Gỗ tự nhiên)", paletteImg: "palette-2k-bet.png", layers: [{ step: 1, name: "Lót Trắng 2K (MX83 Nội Thất)", method: 'phun', defaultLayers: 1, currentLayers: 1, outdoorName: "Lót Trắng 2K (MX83 Ngoại Thất)" }, { step: 2, name: "Màu Bệt Trong Nhà 2K (Wood Paint MX83)", method: 'phun', defaultLayers: 1, currentLayers: 1, outdoorName: "Màu Bệt Ngoài Trời 2K (Wood Paint MX83)" }] }
};

let currentProcess = 'lau';
let currentLocation = 'indoor';

function init() {
    setupEventListeners();
    renderProcess();
    calculate();
}

function setupEventListeners() {
    const tabsScroll = document.getElementById('tabsScroll');
    const prevBtn = document.getElementById('prevTab');
    const nextBtn = document.getElementById('nextTab');
    if (prevBtn) prevBtn.onclick = () => tabsScroll.scrollBy({ left: -200, behavior: 'smooth' });
    if (nextBtn) nextBtn.onclick = () => tabsScroll.scrollBy({ left: 200, behavior: 'smooth' });

    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.onclick = () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentProcess = btn.dataset.process;
            PROCESSES[currentProcess].layers.forEach(l => l.currentLayers = l.defaultLayers);
            renderProcess();
            calculate();
        };
    });

    document.querySelectorAll('input[name="location"]').forEach(radio => {
        radio.onchange = (e) => { currentLocation = e.target.value; renderProcess(); calculate(); };
    });
    document.getElementById('area').oninput = calculate;
}

function renderProcess() {
    const proc = PROCESSES[currentProcess];
    const paletteContainer = document.getElementById('palette-btn-container');
    document.getElementById('process-title').textContent = `Quy trình: ${proc.name}`;
    if (paletteContainer) {
        paletteContainer.innerHTML = proc.paletteImg ? `<button class="palette-btn" id="openPalette"><i data-lucide="palette" style="width:16px;height:16px;"></i> Xem bảng màu</button>` : '';
    }
    const list = document.getElementById('layers-list');
    list.innerHTML = '';
    proc.layers.forEach((l, index) => {
        if (currentProcess === 'sat' && l.isOutdoorOnly && currentLocation === 'indoor') return;
        const prodName = (currentLocation === 'outdoor' && l.outdoorName) ? l.outdoorName : l.name;
        let isStepOptional = (l.optional === true) || (l.optional === 'indoorOnly' && currentLocation === 'indoor');
        const step = document.createElement('div');
        step.className = `step-card ${l.disabled ? 'disabled-step' : ''}`;
        step.innerHTML = `<div class="step-num">${l.step}</div><div class="step-body"><h4>${prodName}</h4><p>PT: ${l.method === 'phun' ? 'Phun' : (l.method === 'lau' ? 'Lau' : 'Quét')}</p></div><div class="step-actions">${isStepOptional ? `<label class="switch"><input type="checkbox" class="optional-toggle" data-idx="${index}" ${l.disabled ? '' : 'checked'}><span class="slider round"></span></label>` : ''}<div class="layer-control"><button class="layer-btn minus" data-idx="${index}"><i data-lucide="minus"></i></button><div class="layer-count"><span>${l.currentLayers}</span> lớp</div><button class="layer-btn plus" data-idx="${index}"><i data-lucide="plus"></i></button></div></div>`;
        list.appendChild(step);
    });
    lucide.createIcons();
    document.querySelectorAll('.optional-toggle').forEach(t => t.onchange = () => { proc.layers[t.dataset.idx].disabled = !t.checked; renderProcess(); calculate(); });
    document.querySelectorAll('.layer-btn.minus').forEach(btn => btn.onclick = () => { if (proc.layers[btn.dataset.idx].currentLayers > 1) { proc.layers[btn.dataset.idx].currentLayers--; renderProcess(); calculate(); }});
    document.querySelectorAll('.layer-btn.plus').forEach(btn => btn.onclick = () => { if (proc.layers[btn.dataset.idx].currentLayers < 5) { proc.layers[btn.dataset.idx].currentLayers++; renderProcess(); calculate(); }});

    const paletteBtn = document.getElementById('openPalette');
    const modal = document.getElementById('paletteModal');
    if (paletteBtn && modal) {
        paletteBtn.onclick = () => {
            document.getElementById('paletteImage').src = proc.paletteImg;
            document.getElementById('modalTitle').textContent = `Bảng màu: ${proc.name}`;
            modal.style.display = 'flex';
        };
    }
    document.getElementById('closeModal').onclick = () => { modal.style.display = 'none'; };

    const paletteImg = document.getElementById('paletteImage');
    if (paletteImg) {
        let isZoomed = false;
        let lastTap = 0;
        
        // Hỗ trợ double tap trên mobile
        paletteImg.addEventListener('touchstart', (e) => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            if (tapLength < 400 && tapLength > 0) {
                isZoomed = !isZoomed;
                paletteImg.style.transform = isZoomed ? 'scale(2.5)' : 'scale(1)';
                
                if (e.touches.length > 0 && isZoomed) {
                    const rect = paletteImg.getBoundingClientRect();
                    const touch = e.touches[0];
                    const x = (touch.clientX - rect.left) / rect.width * 100;
                    const y = (touch.clientY - rect.top) / rect.height * 100;
                    paletteImg.style.transformOrigin = `${x}% ${y}%`;
                } else {
                    paletteImg.style.transformOrigin = 'center center';
                }
                
                paletteImg.style.transition = 'transform 0.3s ease';
                paletteImg.parentElement.style.overflow = isZoomed ? 'auto' : 'hidden';
                lastTap = 0;
                e.preventDefault();
            } else {
                lastTap = currentTime;
            }
        });

        // Hỗ trợ double click trên desktop
        paletteImg.ondblclick = (e) => {
            isZoomed = !isZoomed;
            paletteImg.style.transform = isZoomed ? 'scale(2.5)' : 'scale(1)';
            if (isZoomed) {
                const rect = paletteImg.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width * 100;
                const y = (e.clientY - rect.top) / rect.height * 100;
                paletteImg.style.transformOrigin = `${x}% ${y}%`;
            } else {
                paletteImg.style.transformOrigin = 'center center';
            }
            paletteImg.style.transition = 'transform 0.3s ease';
            paletteImg.parentElement.style.overflow = isZoomed ? 'auto' : 'hidden';
        };
    }
}

function calculate() {
    const area = parseFloat(document.getElementById('area').value) || 0;
    const breakdown = document.getElementById('results-breakdown');
    breakdown.innerHTML = '';
    const proc = PROCESSES[currentProcess];
    if (area <= 0) { document.getElementById('summary-text').textContent = "Vui lòng nhập diện tích"; document.getElementById('total-cost').textContent = "0"; return; }
    document.getElementById('summary-text').textContent = `Diện tích: ${area} m² - Quy trình: ${proc.name}`;
    let totalCost = 0;
    proc.layers.forEach(l => {
        if (currentProcess === 'sat' && l.isOutdoorOnly && currentLocation === 'indoor') return;
        if (l.disabled) return;
        const prodName = (currentLocation === 'outdoor' && l.outdoorName) ? l.outdoorName : l.name;
        const product = products.find(p => p.name === prodName);
        if (!product) return;
        const yieldVal = YIELDS[l.method] || 8;
        const kgNeeded = (area / yieldVal) * l.currentLayers;
        const packCounts = getPackCounts(kgNeeded, product.prices);
        const cost = calculateCost(packCounts, product.prices);
        totalCost += cost;
        const item = document.createElement('div');
        item.className = 'breakdown-item';
        item.innerHTML = `<div class="item-row"><span class="item-name">${prodName}</span><span class="item-price">${cost.toLocaleString('vi-VN')}đ</span></div><div class="item-qty">${kgNeeded.toFixed(2)} Kg | Mua: ${summarizePacks(packCounts)}</div>`;
        breakdown.appendChild(item);
    });
    document.getElementById('total-cost').textContent = totalCost.toLocaleString('vi-VN');
    document.getElementById('m2-cost').textContent = Math.round(totalCost / area).toLocaleString('vi-VN');
}

function getPackCounts(kg, prices) { let remaining = kg; const counts = { c20: 0, c5: 0, c35: 0, c1: 0 }; if (prices["20kg"]) { counts.c20 = Math.floor(remaining / 20); remaining %= 20; } if (prices["5kg"]) { counts.c5 = Math.floor(remaining / 5); remaining %= 5; } else if (prices["3.5kg"]) { counts.c35 = Math.floor(remaining / 3.5); remaining %= 3.5; } counts.c1 = Math.ceil(remaining); return counts; }
function calculateCost(counts, prices) { return (counts.c20 * (prices["20kg"] || 0)) + (counts.c5 * (prices["5kg"] || 0)) + (counts.c35 * (prices["3.5kg"] || 0)) + (counts.c1 * (prices["1kg"] || 0)); }
function summarizePacks(counts) { const parts = []; if (counts.c20 > 0) parts.push(`${counts.c20} th 20kg`); if (counts.c5 > 0) parts.push(`${counts.c5} th 5kg`); if (counts.c35 > 0) parts.push(`${counts.c35} th 3.5kg`); if (counts.c1 > 0) parts.push(`${counts.c1} lon 1kg`); return parts.join(', '); }

function exportImage() { html2canvas(document.querySelector('.results-card'), { backgroundColor: "#f8fafc", scale: 2 }).then(canvas => { const link = document.createElement('a'); link.download = `bao-gia-son-lotus-${Date.now()}.png`; link.href = canvas.toDataURL('image/png'); link.click(); }); }

function sendZalo() {
    const lockKey = 'lotus_zalo_lock';
    const now = Date.now();
    const lockTime = localStorage.getItem(lockKey);
    const area = document.getElementById('area').value || 0;
    const proc = PROCESSES[currentProcess];
    const total = document.getElementById('total-cost').textContent;
    const getMsg = (code) => `✨ ĐƠN HÀNG ƯU ĐÃI TỪ WEBSITE ✨
----------------------------
● Mã ưu đãi: ${code}
● Quy trình: ${proc.name}
● Diện tích: ${area} m2
● Tổng: ${total} VNĐ
----------------------------
${code === '***' ? 'Mã của tôi đã hết hạn, nhờ Lotus Paint kiểm tra giúp!' : `Gửi mã ${code} này để nhận ưu đãi tốt nhất!`}`;
    const copyMsg = (txt) => { const ta = document.createElement("textarea"); ta.value = txt; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); };
    if (lockTime && now < parseInt(lockTime)) { copyMsg(getMsg('***')); window.open(`https://zalo.me/0943966662`, '_blank'); return; }
    const randomCode = 'LP-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    localStorage.setItem(lockKey, (now + 3600000).toString());
    copyMsg(getMsg(randomCode));
    const overlay = document.createElement('div');
    overlay.id = "zalo-overlay";
    overlay.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(15,23,42,0.9); backdrop-filter:blur(15px); z-index:20000; display:flex; align-items:center; justify-content:center;";
    overlay.innerHTML = `<div style="background:white; padding:30px; border-radius:24px; text-align:center; width:88%; max-width:350px; position:relative;"><div id="countdown-timer" style="position:absolute; top:-20px; left:50%; transform:translateX(-50%); background:#ef4444; color:white; padding:5px 15px; border-radius:30px; font-weight:800;">30s</div><div style="background:#f0f7ff; width:60px; height:60px; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:10px auto 15px;"><i data-lucide="timer" style="width:30px;height:30px;color:#0068ff;"></i></div><h3 style="margin:0 0 5px 0; color:#0f172a; font-size:1.2rem; font-weight:800;">ƯU ĐÃI GIỚI HẠN!</h3><div style="background:#f8fafc; border:1px dashed #0068ff; padding:15px; border-radius:12px; margin-bottom:15px;"><span id="display-code" style="color:#0068ff; font-size:1.8rem; font-weight:900; letter-spacing:4px;">${randomCode}</span></div><p id="timer-instruction" style="margin:0 0 20px 0; color:#64748b; font-size:0.9rem; line-height:1.5;">Mã giảm giá của bạn đã được tạo và copy vào hệ thống. Hãy <b>Paste (Dán) & gửi</b> qua Zalo Sơn Lotus để nhận ưu đãi cho đơn hàng này.</p><button id="goZalo" style="background:#0068ff; color:white; border:none; padding:16px 20px; border-radius:16px; font-weight:800; width:100%; cursor:pointer;">MỞ ZALO & GỬI NGAY</button></div>`;
    document.body.appendChild(overlay);
    lucide.createIcons();
    let secondsLeft = 30;
    const countdown = setInterval(() => { secondsLeft--; document.getElementById('countdown-timer').textContent = secondsLeft + 's'; if (secondsLeft <= 0) { clearInterval(countdown); document.getElementById('countdown-timer').textContent = "HẾT HẠN"; document.getElementById('display-code').textContent = "***"; copyMsg(getMsg('***')); } }, 1000);
    document.getElementById('goZalo').onclick = () => { clearInterval(countdown); overlay.remove(); window.open(`https://zalo.me/0943966662`, '_blank'); };
}

init();

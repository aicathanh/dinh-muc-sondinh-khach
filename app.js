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
  { "category": "HỆ 2K", "name": "Lót Trắng 2K (MX83 Nội Thất)", "prices": { "1kg": 183600, "5kg": 891000, "20kg": 3456000 }, "hasHardener": true, "hardenerRatio": 0.10 },
  { "category": "HỆ 2K", "name": "Lót Trắng 2K (MX83 Ngoại Thất)", "prices": { "1kg": 213600, "5kg": 1041000, "20kg": 4056000 }, "hasHardener": true, "hardenerRatio": 0.10 },
  { "category": "HỆ 2K", "name": "Màu Bệt Trong Nhà 2K (Wood Paint MX83)", "prices": { "1kg": 210600, "5kg": 999000, "20kg": 3780000 }, "hasHardener": true, "hardenerRatio": 0.15 },
  { "category": "HỆ 2K", "name": "Màu Bệt Ngoài Trời 2K (Wood Paint MX83)", "prices": { "1kg": 239760, "5kg": 1144800, "20kg": 4363200 }, "hasHardener": true, "hardenerRatio": 0.15 },
  { "category": "HỆ 2K", "name": "Chất đóng rắn 2K (Hardener)", "prices": { "1kg": 480000, "5kg": 2300000 } }
];

const YIELDS = { 'phun': 5, 'lau': 10, 'quet': 8 };

const PROCESSES = {
    'lau': {
        name: "Sơn giữ vân gỗ (Lau)",
        layers: [
            { step: 1, name: "Sơn Lau Gỗ 1K (Wood Stain)", method: 'lau', defaultLayers: 2, currentLayers: 2 },
            { step: 2, name: "Lót Trong Suốt 1K (Sanding Sealer)", method: 'phun', defaultLayers: 1, currentLayers: 1 },
            { step: 3, name: "Phủ Bóng Lacquer Trong Nhà 1K", method: 'phun', defaultLayers: 1, currentLayers: 1, outdoorName: "Phủ Bóng Lacquer Ngoài Trời 1K" }
        ]
    },
    'phun': {
        name: "Sơn giữ vân gỗ (Phun)",
        layers: [
            { step: 1, name: "Lót Trong Suốt 1K (Sanding Sealer)", method: 'phun', defaultLayers: 1, currentLayers: 1 },
            { step: 2, name: "Sơn 2in1 Trong Nhà 1K (Finish Interior)", method: 'phun', defaultLayers: 1, currentLayers: 1, outdoorName: "Sơn 2in1 Ngoài Trời 1K (Finish Exterior)" }
        ]
    },
    'bet': {
        name: "Sơn màu bệt (MDF)",
        layers: [
            { step: 1, name: "Lót Trắng 1K (White Wood Primer)", method: 'phun', defaultLayers: 1, currentLayers: 1 },
            { step: 2, name: "Màu Bệt Trong Nhà 1K (Wood Paint Interior)", method: 'phun', defaultLayers: 1, currentLayers: 1, outdoorName: "Màu Bệt Ngoài Trời 1K (Wood Paint Exterior)" },
            { step: 3, name: "Phủ Bóng Lacquer Trong Nhà 1K", method: 'phun', defaultLayers: 1, currentLayers: 1, outdoorName: "Phủ Bóng Lacquer Ngoài Trời 1K" }
        ]
    },
    'sat': {
        name: "Sơn giả gỗ trên sắt",
        layers: [
            { step: 1, name: "Lót Kim Loại Chống Gỉ (Metal Primer) (LMCP)", method: 'phun', defaultLayers: 1, currentLayers: 1 },
            { step: 2, name: "Metal Coat Finish giả gỗ (LWF)", method: 'quet', defaultLayers: 2, currentLayers: 2 },
            { step: 3, name: "Phủ Bóng Lacquer Ngoài Trời 1K", method: 'phun', defaultLayers: 0, currentLayers: 1, isOutdoorOnly: true }
        ]
    },
    'ximang': {
        name: "Sơn giả gỗ xi măng",
        layers: [
            { step: 1, name: "Lót Giả Gỗ Tấm Xi Măng (Fiber Cement Wood Primer)", method: 'quet', defaultLayers: 1, currentLayers: 1 },
            { step: 2, name: "Màu Giả Gỗ Vách/Trần Tấm Xi Măng (Fiber Cement Plank Paint)", method: 'quet', defaultLayers: 2, currentLayers: 2 },
            { step: 3, name: "Phủ Bóng Vách/Trần Tấm Xi Măng (Fiber Cement Shield)", method: 'quet', defaultLayers: 1, currentLayers: 1 }
        ]
    },
    '2k': {
        name: "Sơn giữ vân gỗ (hệ 2K)",
        layers: [
            { step: 1, name: "Sơn 2in1 Trong Nhà 2K (Finish MX83)", method: 'phun', defaultLayers: 2, currentLayers: 2, outdoorName: "Sơn 2in1 Ngoài Trời 2K (Finish MX83)" }
        ]
    },
    'bet2k': {
        name: "Sơn màu bệt 2K (MDF/gỗ tự nhiên)",
        layers: [
            { step: 1, name: "Lót Trắng 2K (MX83 Nội Thất)", method: 'phun', defaultLayers: 1, currentLayers: 1, outdoorName: "Lót Trắng 2K (MX83 Ngoại Thất)" },
            { step: 2, name: "Màu Bệt Trong Nhà 2K (Wood Paint MX83)", method: 'phun', defaultLayers: 1, currentLayers: 1, outdoorName: "Màu Bệt Ngoài Trời 2K (Wood Paint MX83)" }
        ]
    }
};

let currentProcess = 'lau';
let currentLocation = 'indoor';

function init() {
    setupEventListeners();
    renderProcess();
    calculate();
}

function setupEventListeners() {
    // Tab Scrolling
    const tabsScroll = document.getElementById('tabsScroll');
    const prevTab = document.getElementById('prevTab');
    const nextTab = document.getElementById('nextTab');

    if (prevTab && nextTab && tabsScroll) {
        prevTab.onclick = () => tabsScroll.scrollBy({ left: -200, behavior: 'smooth' });
        nextTab.onclick = () => tabsScroll.scrollBy({ left: 200, behavior: 'smooth' });
    }

    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentProcess = btn.dataset.process;
            // Reset current layers on tab switch
            PROCESSES[currentProcess].layers.forEach(l => l.currentLayers = l.defaultLayers);
            renderProcess();
            calculate();
        });
    });

    const locationRadios = document.querySelectorAll('input[name="location"]');
    locationRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentLocation = e.target.value;
            renderProcess();
            calculate();
        });
    });

    const areaInput = document.getElementById('area');
    areaInput.addEventListener('input', calculate);
}

function renderProcess() {
    const list = document.getElementById('layers-list');
    list.innerHTML = '';
    const proc = PROCESSES[currentProcess];
    
    proc.layers.forEach((l, index) => {
        // Skip step 3 of 'sat' if indoor
        if (currentProcess === 'sat' && l.isOutdoorOnly && currentLocation === 'indoor') return;

        const prodName = (currentLocation === 'outdoor' && l.outdoorName) ? l.outdoorName : l.name;
        const step = document.createElement('div');
        step.className = 'step-card';
        step.innerHTML = `
            <div class="step-num">${l.step}</div>
            <div class="step-body">
                <h4>${prodName}</h4>
                <p>Phương pháp: ${l.method === 'phun' ? 'Phun' : (l.method === 'lau' ? 'Lau' : 'Quét')}</p>
            </div>
            <div class="layer-control">
                <button class="layer-btn minus" data-idx="${index}"><i data-lucide="minus"></i></button>
                <div class="layer-count"><span>${l.currentLayers === 0 && l.isOutdoorOnly ? 1 : l.currentLayers}</span> lớp</div>
                <button class="layer-btn plus" data-idx="${index}"><i data-lucide="plus"></i></button>
            </div>
        `;
        list.appendChild(step);
    });
    
    // Add logic for button clicks
    const minusBtns = document.querySelectorAll('.layer-btn.minus');
    const plusBtns = document.querySelectorAll('.layer-btn.plus');

    minusBtns.forEach(btn => {
        btn.onclick = () => {
            const idx = btn.dataset.idx;
            if (proc.layers[idx].currentLayers > 1) {
                proc.layers[idx].currentLayers--;
                renderProcess();
                calculate();
            }
        };
    });

    plusBtns.forEach(btn => {
        btn.onclick = () => {
            const idx = btn.dataset.idx;
            if (proc.layers[idx].currentLayers < 5) {
                proc.layers[idx].currentLayers++;
                renderProcess();
                calculate();
            }
        };
    });

    lucide.createIcons();
}

function calculate() {
    const area = parseFloat(document.getElementById('area').value) || 0;
    const breakdown = document.getElementById('results-breakdown');
    breakdown.innerHTML = '';
    
    document.getElementById('summary-text').textContent = area > 0 ? `Định mức cho ${area} m²` : "Vui lòng nhập diện tích";

    if (area === 0) {
        document.getElementById('total-cost').textContent = "0";
        document.getElementById('m2-cost').textContent = "0";
        return;
    }

    const proc = PROCESSES[currentProcess];
    let totalCost = 0;

    proc.layers.forEach(l => {
        // Skip step 3 of 'sat' if indoor
        if (currentProcess === 'sat' && l.isOutdoorOnly && currentLocation === 'indoor') return;

        const prodName = (currentLocation === 'outdoor' && l.outdoorName) ? l.outdoorName : l.name;
        const product = products.find(p => p.name === prodName);
        if (!product) return;

        const yieldVal = YIELDS[l.method] || 8;
        // If currentLayers is 0 but it's displayed as 1 (for outdoor only step), use 1
        const layerCount = (l.currentLayers === 0 && l.isOutdoorOnly) ? 1 : l.currentLayers;
        const kgNeeded = (area / yieldVal) * layerCount;

        
        const packCounts = getPackCounts(kgNeeded, product.prices);
        const cost = calculateCost(packCounts, product.prices);
        totalCost += cost;

        const item = document.createElement('div');
        item.className = 'breakdown-item';
        item.innerHTML = `
            <div class="item-row">
                <span class="item-name">${prodName}</span>
                <span class="item-price">${cost.toLocaleString('vi-VN')}đ</span>
            </div>
            <div class="item-qty">Định mức: ${kgNeeded.toFixed(2)} Kg | Mua: ${summarizePacks(packCounts)}</div>
            <div class="item-details">
                <span class="tag">${layerCount} lớp</span>
                <span class="tag">${l.method}</span>
            </div>
        `;
        breakdown.appendChild(item);

        // EXTRA: Hardener logic for 2K systems
        if (product.hasHardener) {
            const hProduct = products.find(p => p.name === "Chất đóng rắn 2K (Hardener)");
            if (hProduct) {
                // Use the specific product's ratio (e.g., 0.15 for MX83) or default to 0.25
                const hRatio = product.hardenerRatio || 0.25;
                const hKgNeeded = kgNeeded * hRatio;
                const hPacks = getPackCounts(hKgNeeded, hProduct.prices);
                const hCost = calculateCost(hPacks, hProduct.prices);
                totalCost += hCost;

                const hItem = document.createElement('div');
                hItem.className = 'breakdown-item h-item';
                hItem.style.borderLeftColor = "#f59e0b"; // Golden/Hardener color
                hItem.innerHTML = `
                    <div class="item-row">
                        <span class="item-name">Chất đóng rắn 2K (Hardener)</span>
                        <span class="item-price">${hCost.toLocaleString('vi-VN')}đ</span>
                    </div>
                    <div class="item-qty">Cần dùng: ${hKgNeeded.toFixed(2)} Kg | Mua: ${summarizePacks(hPacks)}</div>
                    <div class="item-details">
                        <span class="tag">Đi kèm ${prodName}</span>
                    </div>
                `;
                breakdown.appendChild(hItem);
            }
        }
    });

    document.getElementById('total-cost').textContent = totalCost.toLocaleString('vi-VN');
    document.getElementById('m2-cost').textContent = Math.round(totalCost / area).toLocaleString('vi-VN');
}

function getPackCounts(kg, prices) {
    let remaining = kg;
    const counts = { c20: 0, c5: 0, c35: 0, c1: 0 };
    
    if (prices["20kg"]) {
        counts.c20 = Math.floor(remaining / 20);
        remaining %= 20;
    }
    if (prices["5kg"]) {
        counts.c5 = Math.floor(remaining / 5);
        remaining %= 5;
    } else if (prices["3.5kg"]) {
        counts.c35 = Math.floor(remaining / 3.5);
        remaining %= 3.5;
    }
    counts.c1 = Math.ceil(remaining);
    return counts;
}

function calculateCost(counts, prices) {
    return (counts.c20 * (prices["20kg"] || 0)) + 
           (counts.c5 * (prices["5kg"] || 0)) + 
           (counts.c35 * (prices["3.5kg"] || 0)) + 
           (counts.c1 * (prices["1kg"] || 0));
}

function summarizePacks(counts) {
    const parts = [];
    if (counts.c20 > 0) parts.push(`${counts.c20} thùng 20kg`);
    if (counts.c5 > 0) parts.push(`${counts.c5} thùng 5kg`);
    if (counts.c35 > 0) parts.push(`${counts.c35} thùng 3.5kg`);
    if (counts.c1 > 0) parts.push(`${counts.c1} lon 1kg`);
    return parts.join(', ');
}

function exportImage() {
    const target = document.querySelector('.results-card');
    if (!target) return;

    // Use html2canvas with CORS enabled for external images (QR Code)
    html2canvas(target, { 
        backgroundColor: "#f8fafc", 
        scale: 2,
        useCORS: true, 
        allowTaint: false,
        logging: true
    }).then(canvas => {
        try {
            const link = document.createElement('a');
            link.download = `bao-gia-son-lotus-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (e) {
            console.error("Lỗi khi tạo ảnh:", e);
            alert("Có lỗi xảy ra khi tạo ảnh báo giá. Vui lòng thử lại.");
        }
    });
}

document.addEventListener('DOMContentLoaded', init);

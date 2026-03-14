// Database Layanan Lengkap Berdasarkan Kategori
const services = [
    // --- SEA EVENTS ---
    { id: 1, name: "Levi (Tiki/Hydra)", price: 30000, category: "Sea Events" },
    { id: 2, name: "Levi Shield", price: 60000, category: "Sea Events" },
    { id: 3, name: "Levi Crown", price: 30000, category: "Sea Events" },
    { id: 4, name: "Beast Hunter", price: 60000, category: "Sea Events" },
    { id: 5, name: "Shark Necklace", price: 10000, category: "Sea Events" },
    { id: 6, name: "Terror Jaw", price: 10000, category: "Sea Events" },
    { id: 7, name: "Monster Magnet", price: 20000, category: "Sea Events" },
    { id: 8, name: "Sanguine Art", price: 90000, category: "Sea Events" },

    // --- DRAGON UPDATE ---
    { id: 9, name: "Dragon Race", price: 100000, category: "Dragon Update" },
    { id: 10, name: "Joki Belt", price: 50000, category: "Dragon Update" },
    { id: 11, name: "Dragon Heart", price: 30000, category: "Dragon Update" },
    { id: 12, name: "Dragon Storm", price: 50000, category: "Dragon Update" },
    { id: 13, name: "Full Gear Draco", price: 125000, category: "Dragon Update" },
    { id: 14, name: "Draco V1", price: 20000, category: "Dragon Update" },
    { id: 15, name: "Draco V2", price: 20000, category: "Dragon Update" },
    { id: 16, name: "Draco V3", price: 10000, category: "Dragon Update" },
    { id: 17, name: "1x Trial Draco", price: 25000, category: "Dragon Update" },
    { id: 18, name: "Volcano Magnet", price: 10000, category: "Dragon Update" },

    // --- JOKI V4 ---
    { id: 19, name: "Blue Gear / Pull Lever", price: 30000, category: "Race V4", note: "Wajib Mirror Fractal + Valk Helm" },
    { id: 20, name: "1x Trial (Login)", price: 7000, category: "Race V4" },
    { id: 21, name: "1x Trial (Gendong)", price: 10000, category: "Race V4" },
    { id: 22, name: "Full Gear (Frag Sendiri)", price: 40000, category: "Race V4" },
    { id: 23, name: "True Gear (Frag Sendiri)", price: 50000, category: "Race V4" },
    { id: 24, name: "Train T3 - T5", price: 10000, category: "Race V4", note: "Frag Sendiri" },
    { id: 25, name: "Train T5 - T10", price: 15000, category: "Race V4", note: "Frag Sendiri" },

    // --- MATERIAL ---
    { id: 26, name: "99 Scale", price: 150000, category: "Material" },
    { id: 27, name: "99 Elec Wing", price: 50000, category: "Material" },
    { id: 28, name: "99 Fools Gold", price: 30000, category: "Material" },
    { id: 29, name: "1 Dark Fragment", price: 13000, category: "Material" },
    { id: 30, name: "1000 Bones", price: 10000, category: "Material" },
    { id: 31, name: "100 Ectoplasm", price: 3000, category: "Material" },
    { id: 32, name: "5 Dragon Scale", price: 5000, category: "Material" },
    { id: 33, name: "2 Conjured Cocoa", price: 1000, category: "Material" },

    // --- SWORD & INSTINCT ---
    { id: 34, name: "V3 Dark Blade", price: 50000, category: "Sword", note: "Wajib V3 Race Human/Angel/Shark/Rabbit" },
    { id: 35, name: "Shark Anchor", price: 50000, category: "Sword" },
    { id: 36, name: "Yama", price: 15000, category: "Sword" },
    { id: 37, name: "Tushita", price: 15000, category: "Sword" },
    { id: 38, name: "V2 Dark Blade", price: 5000, category: "Sword" },
    { id: 39, name: "V2 Instinct", price: 25000, category: "Instinct" },

    // --- RACE & RAID ---
    { id: 40, name: "Unlock Cyborg", price: 25000, category: "Race" },
    { id: 41, name: "Unlock Ghoul", price: 15000, category: "Race" },
    { id: 42, name: "V3 Race Ghoul", price: 10000, category: "Race" },
    { id: 43, name: "V3 Race (Other)", price: 5000, category: "Race" },
    { id: 44, name: "V2 Race", price: 3000, category: "Race" },
    { id: 45, name: "Advanced Raid", price: 4000, category: "Raid" },
    { id: 46, name: "1x Normal Raid", price: 1000, category: "Raid" }
];

let cart = [];
let currentCategory = 'All';

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id + '-page').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(id === 'catalog') renderCatalog();
}

// Fitur Filter Kategori
function filterCategory(category) {
    currentCategory = category;
    
    // Update tampilan tombol aktif
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.innerText === category || (category === 'All' && btn.innerText === 'Semua')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderCatalog();
}

function renderCatalog() {
    const list = document.getElementById('product-list');
    
    // Filter data
    const filteredData = currentCategory === 'All' 
        ? services 
        : services.filter(item => item.category === currentCategory);

    if (filteredData.length === 0) {
        list.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-dim);">Layanan tidak ditemukan.</p>`;
        return;
    }

    list.innerHTML = filteredData.map(s => `
        <div class="card">
            <div class="card-badge">${s.category}</div>
            <h3>${s.name}</h3>
            ${s.note ? `<p style="font-size: 0.75rem; color: var(--text-dim); margin-bottom: 10px;">* ${s.note}</p>` : ''}
            <span class="price">Rp ${s.price.toLocaleString('id-ID')}</span>
            <button class="btn-add" onclick="addToCart(${s.id}, event)">Tambah Ke Keranjang</button>
        </div>
    `).join('');
}

function addToCart(sid, event) {
    const existingItem = cart.find(item => item.id === sid);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        const item = services.find(s => s.id === sid);
        cart.push({ ...item, qty: 1 });
    }
    
    // Efek Klik & Notifikasi
    if (event) {
        const btn = event.currentTarget;
        btn.classList.add('btn-clicked');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Berhasil!';
        
        setTimeout(() => {
            btn.classList.remove('btn-clicked');
            btn.innerHTML = originalText;
        }, 800);
    }

    // Animasi Keranjang
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.classList.add('cart-icon-animate');
    setTimeout(() => cartIcon.classList.remove('cart-icon-animate'), 500);

    updateUI();
}

function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty < 1) cart.splice(index, 1);
    updateUI();
}

function clearCart() {
    if(cart.length === 0) return;
    document.getElementById('confirm-modal').classList.add('active');
}

function closeConfirm() {
    document.getElementById('confirm-modal').classList.remove('active');
}

function executeClearCart() {
    cart = [];
    updateUI();
    closeConfirm();
    toggleCart(); 
}

function updateUI() {
    const totalQty = cart.reduce((acc, curr) => acc + curr.qty, 0);
    document.getElementById('cart-count').innerText = totalQty;

    const body = document.getElementById('cart-body');
    if (cart.length === 0) {
        body.innerHTML = '<p style="text-align:center; color:#64748b; padding:20px;">Keranjang kosong.</p>';
    } else {
        body.innerHTML = cart.map((item, i) => `
            <div class="cart-item">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p>Rp ${(item.price * item.qty).toLocaleString('id-ID')}</p>
                </div>
                <div class="qty-controls">
                    <button class="btn-qty" onclick="changeQty(${i}, -1)">-</button>
                    <span class="qty-val">${item.qty}</span>
                    <button class="btn-qty" onclick="changeQty(${i}, 1)">+</button>
                </div>
            </div>
        `).join('');
    }

    const totalHarga = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
    document.getElementById('total-price').innerText = `Rp ${totalHarga.toLocaleString('id-ID')}`;
}

function toggleCart() {
    document.getElementById('cart-modal').classList.toggle('active');
}

function checkoutWA() {
    if (cart.length === 0) return alert("Keranjang masih kosong!");
    const phone = "6281283687508";
    let text = "*ORDER NOLEPSTORE*\n\n";
    cart.forEach((it, i) => {
        text += `${i+1}. ${it.name} x${it.qty} - (Rp ${(it.price * it.qty).toLocaleString()})\n`;
    });
    const total = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
    text += `\n*TOTAL PEMBAYARAN: Rp ${total.toLocaleString()}*\n\nMohon diproses ya min!`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`);
}

document.addEventListener('DOMContentLoaded', renderCatalog);
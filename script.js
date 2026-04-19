// Database Layanan Baru Berdasarkan jokiData yang diberikan
const services = [
    { name: "100 Level Sea 1", price: "Rp 5k", tag: "Best Seller", cat: "Level", val: 5000 },
    { name: "100 Level Sea 2", price: "Rp 10k", tag: "Best Seller", cat: "Level", val: 10000 },
    { name: "100 Level Sea 3", price: "Rp 15k", tag: "Best Seller", cat: "Level", val: 15000 },
    { name: "150 Mastery Melee/Sword", price: "Rp 3k", tag: "Mastery 0 - 300", cat: "Mastery", val: 3000 },
    { name: "100 Mastery Fruit/Gun", price: "Rp 5k", tag: "Mastery 0 - 300", cat: "Mastery", val: 5000 },
    { name: "150 Mastery Melee/Sword", price: "Rp 5k", tag: "Mastery 300 - 600", cat: "Mastery", val: 5000 },
    { name: "100 Mastery Fruit/Gun", price: "Rp 10k", tag: "Mastery 300 - 600", cat: "Mastery", val: 10000 },
    { name: "1-700", price: "Rp 10k", tag: "Khusus Sea 1", cat: "Paket Level Murah", val: 10000 },
    { name: "700-1500", price: "Rp 20k", tag: "Khusus Sea 2", cat: "Paket Level Murah", val: 20000 },
    { name: "1500-2800", price: "Rp 35k", tag: "Khusus Sea 3", cat: "Paket Level Murah", val: 35000 },
    { name: "1M Belly", price: "Rp 5k", tag: "Best Seller", cat: "Currency", val: 5000 },
    { name: "1K Fragment", price: "Rp 1k", tag: "Buah Buyer", cat: "Currency", val: 1000 },
    { name: "1K Fragment", price: "Rp 2k", tag: "Buah Penjoki", cat: "Currency", val: 2000 },
    { name: "100M Belly", price: "Rp 150k", tag: "Best Seller", cat: "Currency", val: 150000 },
    { name: "100K Fragment", price: "Rp 180k", tag: "Best Seller", cat: "Currency", val: 180000 },
    { name: "1000 Exp Instinct ", price: "Rp 15k", tag: "Best Seller", cat: "Instinct", val: 15000 },
    { name: "Instinct V2 ", price: "Rp 10k", tag: "Best Seller", cat: "Instinct", val: 10000 },
    { name: "Superhuman", price: "Rp 25k", tag: "Wajib Memiliki Dark Step, Electric, Water Kungfsu, Dragon Breath", cat: "Fighting Style", val: 25000 },
    { name: "Electric Claw", price: "Rp 5k", tag: "Wajib 400 Mastery Electric, 3M Belly, 5K Fragment", cat: "Fighting Style", val: 5000 },
    { name: "Death Step", price: "Rp 10k", tag: "Wajib 400 Mastery Dark Step", cat: "Fighting Style", val: 10000 },
    { name: "Sharkman Karate", price: "Rp 10k", tag: "Wajib 400 Mastery Water Kungfu, 3M Belly, 5K Fragment", cat: "Fighting Style", val: 10000 },
    { name: "Dragontalon", price: "Rp 20k", tag: "Wajib 400 Mastery Dragon Breath, 3M Belly, 5K Fragment", cat: "Fighting Style", val: 20000 },
    { name: "Godhuman", price: "Rp 15k", tag: "Wajib Memiliki Electric Claw, Death Step, Sharkman Karate, Dragontalon", cat: "Fighting Style", val: 15000 },
    { name: "Sanguine Art", price: "Rp 60k", tag: "Best Seller ", cat: "Fighting Style", val: 60000 },
    { name: "Dark Dagger", price: "Rp 80k", tag: "10X Lawan Rip_indra", cat: "Sword", val: 80000 },
    { name: "Hallow Scythe", price: "Rp 40k", tag: "10X Lawan Soul Reaper ", cat: "Sword", val: 40000 },
    { name: "V2 Dark Blade", price: "Rp 5k", tag: "Mythic", cat: "Sword", val: 5000 },
    { name: "V3 Dark Blade", price: "Rp 50k", tag: "Wajib V3 Race Human, Angel, Shark, Rabbit", cat: "Sword", val: 50000 },
    { name: "True Triple Katana", price: "Rp 20k", tag: "Wajib Memiliki 2M Belly, Shizu,Oroshi,Saishi", cat: "Sword", val: 20000 },
    { name: "Cursed Dual Katana", price: "Rp 20k", tag: "Wajib Level 2200 Keatas + 10K Jika Yama Dan Tushita Belum 350 Mastery", cat: "Sword", val: 20000 },
    { name: "Yama", price: "Rp 15k", tag: "Mythic", cat: "Sword", val: 15000 },
    { name: "Tushita", price: "Rp 15k", tag: "Wajib Level 2200 Keatas", cat: "Sword", val: 15000 },
    { name: "Oroshi", price: "Rp 4k", tag: "Wajib Memiliki 2M Belly", cat: "Sword", val: 4000 },
    { name: "Saishi", price: "Rp 4k", tag: "Wajib Memiliki 2M Belly", cat: "Sword", val: 4000 },
    { name: "Shizu", price: "Rp 4k", tag: "Wajib Memiliki 2M Belly", cat: "Sword", val: 4000 },
    { name: "3 Legendary Sword", price: "Rp 10k", tag: "Oroshi,Saishi,Shizu", cat: "Sword", val: 10000 },
    { name: "Trident Spikey", price: "Rp 20k", tag: "Mythic", cat: "Sword", val: 20000 },
    { name: "Kabucha", price: "Rp 5k", tag: "Mythic", cat: "Sword", val: 5000 },
    { name: "Acidum Rifle", price: "Rp 20k", tag: "Mythic", cat: "Sword", val: 20000 },
    { name: "Skull Guitar", price: "Rp 15k", tag: "Wajib Level 2300 Keatas + 15K Jika Material Belum Ada", cat: "Sword", val: 15000 },
    { name: "Normal", price: "Rp 2k", tag: "Normal", cat: "Haki Resep", val: 2000 },
    { name: "Legend", price: "Rp 5k", tag: "Legend", cat: "Haki Resep", val: 5000 },
    { name: "Normal Raid 1X", price: "Rp 1k", tag: "Buah Dari Buyer", cat: "Raid", val: 1000 },
    { name: "Normal Raid + Fruit 1X", price: "Rp 2k", tag: "Buah Dari Penjoki", cat: "Raid", val: 2000 },
    { name: "Advanced Raid 1X", price: "Rp 5k", tag: "Buah Dari Buyer", cat: "Raid", val: 5000 },
    { name: "Advanced Raid 1X", price: "Rp 8k", tag: "Buah Dari Penjoki", cat: "Raid", val: 8000 },
    { name: "Law Raid", price: "Rp 5k", tag: "Fragment Buyer", cat: "Raid", val: 5000 },
    { name: "Pirate Raid", price: "Rp 10k", tag: "Server 1 Jam", cat: "Raid", val: 10000 },
    { name: "Dough King", price: "Rp 20k", tag: "Mythic", cat: " Boss Raid", val: 20000 },
    { name: "Soul Reaper", price: "Rp 15k", tag: "Mythic", cat: " Boss Raid", val: 15000 },
    { name: "Rip_indra", price: "Rp 15k", tag: "Mythic", cat: " Boss Raid", val: 15000 },
    { name: "DarkBeard", price: "Rp 15k", tag: "Mythic", cat: " Boss Raid", val: 15000 },
    { name: "Tyrant", price: "Rp 10k", tag: "Mythic", cat: " Boss Raid", val: 10000 },
    { name: "Conjured Cocoa x2", price: "Rp 1k", tag: "Mythic", cat: "Material", val: 1000 },
    { name: "Shark Tooth x2", price: "Rp 1k", tag: "Mythic", cat: "Material", val: 1000 },
    { name: "Moonstone x10", price: "Rp 10k", tag: "Mythic", cat: "Material", val: 10000 },
    { name: "Fire Feather x10", price: "Rp 10k", tag: "Mythic", cat: "Material", val: 10000 },
    { name: "Mystic Droplet x2", price: "Rp 1k", tag: "Mythic", cat: "Material", val: 1000 },
    { name: "Electric Wing x2", price: "Rp 1k", tag: "Mythic", cat: "Material", val: 1000 },
    { name: "Fools Gold x3", price: "Rp 2k", tag: "Mythic", cat: "Material", val: 2000 },
    { name: "Blaze Ember x3", price: "Rp 2k", tag: "Mythic", cat: "Material", val: 2000 },
    { name: "Volt Capsule x3", price: "Rp 2k", tag: "Mythic", cat: "Material", val: 2000 },
    { name: "Mutant Tooth x1", price: "Rp 3k", tag: "Mythic", cat: "Material", val: 3000 },
    { name: "Bones x1000", price: "Rp 10k", tag: "Mythic", cat: "Material", val: 10000 },
    { name: "Vampire Fang x10", price: "Rp 10k", tag: "Mythic", cat: "Material", val: 10000 },
    { name: "Demonic Wisp x10", price: "Rp 10k", tag: "Mythic", cat: "Material", val: 10000 },
    { name: "Scrap Metal x10", price: "Rp 10k", tag: "Mythic", cat: "Material", val: 10000 },
    { name: "Mini Tush x10", price: "Rp 10k", tag: "Mythic", cat: "Material", val: 10000 },
    { name: "Ectoplasm x100", price: "Rp 3k", tag: "Mythic", cat: "Material", val: 3000 },
    { name: "Dragon Scale x5", price: "Rp 5k", tag: "Mythic", cat: "Material", val: 5000 },
    { name: "Terror Eye x1", price: "Rp 5k", tag: "Mythic", cat: "Material", val: 5000 },
    { name: "Leviathan Scale x10", price: "Rp 30k", tag: "Mythic", cat: "Material", val: 30000 },
    { name: "Legend Scroll", price: "Rp 30k", tag: "Mythic", cat: "Material", val: 30000 },
    { name: "Mythical Scroll", price: "Rp 80k", tag: "Mythic", cat: "Material", val: 80000 },
    { name: "V2 All Race", price: "Rp 3k", tag: "Belly Punya Buyer", cat: "Race", val: 3000 },
    { name: "V3 Race Not Ghoul", price: "Rp 5k", tag: "Belly Punya Buyer", cat: "Race", val: 5000 },
    { name: "V3 Race Ghoul", price: "Rp 15k", tag: "Belly Punya Buyer", cat: "Race", val: 15000 },
    { name: "Unlock Ghoul", price: "Rp 15k", tag: "Boss Cursed Ship ", cat: "Race", val: 15000 },
    { name: "Insert FOD", price: "Rp 10k", tag: "Fish Of Darkness", cat: "Race", val: 10000 },
    { name: "Unlock Cyborg", price: "Rp 10k", tag: "Fragment Punya Buyer + Wajib Sudah Insert FOD", cat: "Race", val: 10000 },
    { name: "Pull Lever/Bluegear", price: "Rp 10k", tag: "Wajib Memiliki Mirror Fractal + Valkyrie Helm", cat: "V4", val: 10000 },
    { name: "1x Trial", price: "Rp 7k", tag: "Via Login", cat: "V4", val: 7000 },
    { name: "1x Trial", price: "Rp 10k", tag: "Via Gendong", cat: "V4", val: 10000 },
    { name: "1x Train", price: "Rp 3k", tag: "Khusus T1-T2", cat: "V4", val: 3000 },
    { name: "FullGear T5", price: "Rp 40k", tag: "Wajib Ada 9.250 Fragment", cat: "V4", val: 40000 },
    { name: "FullGear T10/TrueGear", price: "Rp 50k", tag: "Wajib Ada 26.750 Fragment", cat: "V4", val: 50000 },
    { name: "Train T3->T5", price: "Rp 10k", tag: "Wajib Ada 6.750 Fragment", cat: "V4", val: 10000 },
    { name: "Train T5->T10", price: "Rp 15k", tag: "Wajib Ada 17.500 Fragment", cat: "V4", val: 15000 },
    { name: "Shark Necklace", price: "Rp 10k", tag: "-", cat: "Sea Event", val: 10000 },
    { name: "Terror Jaw", price: "Rp 10k", tag: "-", cat: "Sea Event", val: 10000 },
    { name: "Monster Magnet", price: "Rp 20k", tag: "Wajib Memiliki Shark Necklace & Terror Jaw", cat: "Sea Event", val: 20000 },
    { name: "Shark Anchor", price: "Rp 15k", tag: "-", cat: "Sea Event", val: 15000 },
    { name: "Leviathan Crown", price: "Rp 70k", tag: "-", cat: "Sea Event", val: 70000 },
    { name: "Beast Hunter", price: "Rp 70k", tag: "-", cat: "Sea Event", val: 70000 },
    { name: "Leviathan Shield", price: "Rp 80k", tag: "-", cat: "Sea Event", val: 80000 },
    { name: "Remove Cd Bribe", price: "Rp 5k", tag: "-", cat: "Sea Event", val: 5000 },
    { name: "Leviathan Heart TIKI", price: "Rp 25k", tag: "-", cat: "Sea Event", val: 25000 },
    { name: "Freeze Hydra Island", price: "Rp 25k", tag: "-", cat: "Sea Event", val: 25000 },
    { name: "Fox Lamp + Bonus", price: "Rp 40k", tag: "-", cat: "Kitsune Event", val: 40000 },
    { name: "Azure Ember x25", price: "Rp 10k", tag: "-", cat: "Kitsune Event", val: 10000 },
    { name: "1 Belt", price: "Rp 5k", tag: "-", cat: "Dragon Event", val: 5000 },
    { name: "6 Belt", price: "Rp 30k", tag: "-", cat: "Dragon Event", val: 30000 },
    { name: "Red Belt", price: "Rp 15k", tag: "-", cat: "Dragon Event", val: 15000 },
    { name: "Black Belt", price: "Rp 25k", tag: "-", cat: "Dragon Event", val: 25000 },
    { name: "Volcano Magnet", price: "Rp 10k", tag: "-", cat: "Dragon Event", val: 10000 },
    { name: "1 Dragon Egg", price: "Rp 20k", tag: "-", cat: "Dragon Event", val: 20000 },
    { name: "Draco Race", price: "Rp 100k", tag: "-", cat: "Dragon Event", val: 100000 },
    { name: "Fire Flower x1", price: "Rp 5k", tag: "-", cat: "Dragon Event", val: 5000 },
    { name: "V2 Draco", price: "Rp 20k", tag: "-", cat: "Dragon Event", val: 20000 },
    { name: "V3 Draco", price: "Rp 10k", tag: "-", cat: "Dragon Event", val: 10000 },
    { name: "DragonHeart Sword", price: "Rp 30k", tag: "-", cat: "Dragon Event", val: 30000 },
    { name: "DragonStorm Gun", price: "Rp 50k", tag: "-", cat: "Dragon Event", val: 50000 },
    { name: "Freezing Hydra", price: "Rp 30k", tag: "Wajib 500 Mastery DragonHeart + DragonStorm + V3 Race Draco", cat: "Dragon Event", val: 30000 },
    { name: "1x Trial Draco", price: "Rp 25k", tag: "Tanpa Magnet", cat: "Dragon Event", val: 25000 },
    { name: "1x Trial Draco", price: "Rp 20k", tag: "Ada Magnet", cat: "Dragon Event", val: 20000 },
    { name: "Darkcoat", price: "Rp 100k", tag: "10x Lawan DarkBeard", cat: "Accessories", val: 100000 },
    { name: "Pale Scraf", price: "Rp 10k", tag: "Wajib Sea 3", cat: "Accessories", val: 10000 },
    { name: "Muskeeter Hat", price: "Rp 10k", tag: "Wajib Level 1800+", cat: "Accessories", val: 10000 },
    { name: "Pilot Helmet", price: "Rp 5k", tag: "Wajib Sea 3", cat: "Accessories", val: 5000 },
    { name: "1x Dungeon Easy", price: "Rp 5k", tag: "Dungeon", cat: "Dungeon", val: 5000 },
    { name: "1x Dungeon Hard", price: "Rp 10k", tag: "Dungeon", cat: "Dungeon", val: 10000 },
];

let cart = [];
let currentCategory = 'All';

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id + '-page').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(id === 'catalog') renderCatalog();
}

function filterCategory(category) {
    currentCategory = category;
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        // Cek teks tombol atau value kategori
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
    const filteredData = currentCategory === 'All' 
        ? services 
        : services.filter(item => item.cat === currentCategory);

    if (filteredData.length === 0) {
        list.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-dim);">Layanan tidak ditemukan.</p>`;
        return;
    }

    list.innerHTML = filteredData.map((s, index) => `
        <div class="card">
            <div class="card-badge">${s.cat}</div>
            <h3>${s.name}</h3>
            ${s.tag ? `<p style="font-size: 0.75rem; color: var(--text-dim); margin-bottom: 10px;">* ${s.tag}</p>` : ''}
            <span class="price">${s.price}</span>
            <button class="btn-add" onclick="addToCart('${s.name}', ${s.val}, event)">Tambah Ke Keranjang</button>
        </div>
    `).join('');
}

function addToCart(name, value, event) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ name: name, price: value, qty: 1 });
    }
    
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
    if(document.getElementById('cart-modal').classList.contains('active')) toggleCart();
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
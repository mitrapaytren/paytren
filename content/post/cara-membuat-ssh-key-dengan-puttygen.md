+++
title = "Cara Membuat SSH Key dengan PuTTYgen untuk Login ke VPS"
description = "Penggunaan password untuk login ke server memiliki celah keamanan yang berbahaya, untuk mengatasi hal tersebut gunakanlah SSH Key sebagai pengganti password"
tags = ["ssl", "digital ocean", "web server"]
categories = ["web hosting"]
slug = "cara-membuat-ssh-key-dengan-puttygen"
date = "2017-11-02"
image = "/images/post/2017/11/membuat-ssh-key.jpg"
authors = ["akhlis"]
+++

Saat anda memutuskan beralih dari _shared hosting_ konvensional menuju VPS, maka anda harus mulai terbiasa dan paham cara menggunakan SSH. Karena semua aktifitas anda dalam mengelola server VPS itu dilakukan melalui SSH.

## Apa itu SSH?
SSH (Secure Shell) adalah protokol terenkripsi yang digunakan untuk mengelola dan berkomunikasi antara klien dan server.

Jadi semua otentikasi pengguna, _commands, output_, dan transfer file itu akan dienkripsi agar terlindung dari serangan hacker pada jaringan internet yang digunakan.

Ketika menggunakan server Linux pada VPS, anda akan menghabiskan banyak waktu dalam menggunakan terminal agar bisa terhubung ke server melalui SSH.

Untuk menjalankan SSH itu diperlukan aplikasi SSH Clien yang bernama [OpenSSH](https://www.ssh.com/ssh/openssh/). Biasanya aplikasi tersebut sudah pra-instal pada sistem operasi Linux atau Unix.

Namun jika anda pengguna Windows, anda harus menginstal dulu salah satu aplikasi SSH Clien alternatif berikut ini.
- [PuTTY (Gratis)](https://www.ssh.com/ssh/putty/)
- [WinSCP](https://www.ssh.com/ssh/winscp/)
- [FileZilla](https://www.ssh.com/ssh/filezilla/)

Anda bisa login ke server lewat SSH dengan cara memasukkan username dan password yang dikirim ke emailmu oleh penyedia VPS. Tapi agar server anda lebih aman, sebaiknya gunakan login `SSH Key` daripada menggunakan password.

## Apa itu SSH Key
Penggunaan user name dan password untuk login ke VPS masih memiliki celah keamanan yang berbahaya. 

Karena password tersebut bisa dengan mudah diretas seseorang melalui jaringan internet dengan menggunakan serangan [_brute-force_](https://en.wikipedia.org/wiki/Brute-force_attack).

Untuk mengatasi hal tersebut, maka gunakanlah SSH Key sebagai pengganti password. Karena SSH Key menerapkan cara untuk login ke VPS dengan sistem keamanan yang lebih kuat dibanding password.

SSH Key melakukan otentikasi berdasarkan kunci kriptografi dengan membuat sepasang _public dan private key_ yang hampir tidak bisa diretas. 

_Public key_ itu nantinya diletakkan pada server VPS, sedangkan yang _private key_ tetap ditaruh pada laptop kita. _Private key_ digunakan untuk mengakses server sebagai pengganti password. 

Untuk lebih mudah memahaminya, _public key_ itu diibaratkan sebagai gembok, sedangkan _private key_ itu sebagai kuncinya.

Karena itulah jaga baik-baik _private key_ anda jangan sampai hilang atau diambil orang lain. Jika _private key_ tersebut sampai hilang, maka anda tidak bisa lagi login ke VPS anda.

## Cara Membuat SSH Key Menggunakan PuTTYgen
SSH Key bisa dibuat dengan cara menggunakan key-generator.

Bagi pengguna Windows, anda bisa menggunakan aplikasi [PuTTYgen](https://www.ssh.com/ssh/putty/windows/) untuk membuatnya. Untuk pengguna [Linux](https://www.ssh.com/ssh/putty/linux/) dan [Mac](https://www.ssh.com/ssh/putty/mac/), juga bisa menggunakan PuTTyGen versi masing-masing tentunya.

PuTTYgen adalah tool key generator untuk membuat SSH Key dengan PuTTY. Fungsi utamanya untuk membuat pasangan _public key_ dan _private key_.

PuTTY membuat key dalam formatnya sendiri yang disebut file `.ppk`. Tetapi tool tersebut juga bisa mengubah key dari dan ke beberapa format tool SSH lainnya.

Ikuti langkah-langkah berikut ini untuk membuat SSH Key dengan PuTTYgen:

1. Download aplikasi PuTTY di [www.putty.org](http://www.putty.org/) kemudian instal pada laptop anda.
2. Jalankan PuTTYgen yang telah terinstal bersama PuTTY tadi.
3. Pilih `SSH-1 (RSA)` pada `Type of key to generate`.
4. Pastikan `Number of bits in a generated key` terisi dengan angka 2048 atau 4096. Ini menentukan seberapa kuat keamanan kuncinya agar tidak mudah dibobol menggunakan metode brute force.

    ![generate-key-gen](/images/post/2017/11/generate-key-gen.png)
5. Klik tombol `Generate` untuk membuat SSH Key.
6. Gerakkan cursor mouse secara acak pada area kosong dibawah progress bar sampai prosesnya selesai.

    ![moving-the-mouse](/images/post/2017/11/moving-the-mouse.png)
7. Sepasang _public key_ dan _private key_ berhasil dibuat.
8. Ubah teks yang ada pada kolom `Key comment` (tidak wajib) sesuai identifikasi tujuan penggunaan anda.

    ![rsa-key-nettren](/images/post/2017/11/rsa-key-nettren.png)
9. Pada kolom `Key passphrase`, isikan teks yang berfungsi sebagai password setiap kali akan digunakan (sebenarnya tidak wajib, tapi agar lebih aman sebaiknya gunakanlah password).

    ![key-phassphrase-2](/images/post/2017/11/key-phassphrase-2.png)
10. Klik `Save public key`,

    ![public-key](/images/post/2017/11/public-key.png)
    atau salin public key yang telah dibuat ke kolom `Add SSH Key` saat [proses pembuatan droplets](https://nettren.com/cara-membuat-droplets-digital-ocean/).
    
    ![add-rsa-key-droplets](/images/post/2017/11/add-rsa-key-droplets.png)
    
11. Klik `Save private key` dan beri nama sesukamu dengan ekstensi `.ppk`, jangan sampai hilang atau diambil orang lain. Karena `private key` tersebut digunakan pada komputer kita untuk login ke server. Dan jika file tersebut sampai hilang, maka anda tidak akan bisa lagi masuk ke server anda.

    ![my-private-key](/images/post/2017/11/my-private-key.png)

Oya, perlu anda ketahui sebelumnya, proses pembuatan SSH Key diatas itu dilakukan sebelum anda membuat droplets pada Digital Ocean, jadi  _public key_ tersebut ditambahkan ke server saat [proses pembuatan droplets](https://nettren.com/cara-membuat-droplets-digital-ocean/).

Atau anda juga bisa menambahkan SSH Key terlebih dahulu pada menu akun Digital Ocean dengan cara masuk ke menu `Setting > Security > Add SSH Key`. Setelah itu baru [membuat dropletnya](https://nettren.com/cara-membuat-droplets-digital-ocean/).

![add-ssh-key-setting](/images/post/2017/11/add-ssh-key-setting.png)

## Cara Memasang SSH Key pada Server
Bagi anda yang sudah terlanjur membuat droplets duluan sebelum memasang SSH Key, ikuti cara memasang _public key_ berikut ini.

1. Login seperti biasa lewat SSH ke server. Atau bisa juga login menggunakan access console pada droplets.
    
    ![launch-console](/images/post/2017/11/launch-console.png)
2. Buatlah folder `.ssh` pada folder `home` user dengan cara:
    ```bash
    mkdir -p ~/.ssh
    ```
    atau lewati saja jika sudah ada folder tersebut.
3. Sekarang buatlah atau modifikasi file `authorized_keys` dalam folder `.ssh`.
    ```bash
    nano ~/.ssh/authorized_keys
    ```
    Kemudian salin _public key_ yang berupa teks dalam kotak `Public key for pasting into authorized_keys file` yang anda buat di PuTTYgen pada langkah nomor 10 diatas, lalu tempelkan pada file authorized_keys.
    
    ![authorized-key](/images/post/2017/11/authorized-key.png)
    
    Setelah itu simpan file tersebut dengan cara tekan tombol `ctrl+X > ctrl+Y > enter`

4. Aturlah hak akses folder dan file _authorized_keys_ tersebut (sangat penting).
    ```bash
    chmod 0700 ~/.ssh
    chmod 0644 ~/.ssh/authorized_keys
    ```

Jika anda mengikuti panduan diatas dengan benar, seharusnya anda sudah bisa login ke server dengan SSH tanpa password.

Gunakanlah aplikasi PuTTY untuk login ke server tersebut, silahkan baca dulu selengkapnya [Cara Menggunakan SSH Key dengan PuTTY pada Droplets Digital Ocean](https://nettren.com/cara-menggunakan-ssh-key-dengan-putty)

### Cara Mematikan Login SSH Menggunakan Username dan Password
Setelah anda berhasil login ke server, proses selanjutnya yaitu mematikan login SSH menggunakan password. 

Hal ini dilakukan untuk meningkatkan keamanan server agar tidak bisa diakses lagi menggunakan username dan password.

Tapi sebelum melakukannya, anda harus memastikan dulu login dengan SSH Key itu benar-benar bekerja dengan baik, karena jika login tersebut masih gagal, tapi anda sudah terlanjur mematikan passwordnya, maka anda tidak bisa lagi login ke server.

Untuk mematikan login password, anda perlu mengedit file konfigurasi SSH pada server. Pada sistem Ubuntu/Debian, file itu terletak pada `/etc/ssh/sshd_config`.
```bash
sudo nano /etc/ssh/sshd_config
```
Cari dan ubah pilihan seperti berikut
```bash
[...]
PasswordAuthentication no
[...]
UsePAM no
[...]
```
Untuk menyimpan tekan `ctrl + X > ctrl + Y > enter`. Kemudian `reload` konfigurasi SSH server
```bash
sudo reload ssh
```

Nah, sekarang anda hanya bisa login ke server menggunakan SSH Key saja. Dan anda tidak perlu lagi khawatir server anda dibobol orang lain.

Tapi anda juga harus menyimpan _private key_ tersebut dengan aman, dan jangan lupa dibackup juga ke akun cloud anda, misalnya di [Dropbox](https://db.tt/P6738Fm8yS) atau Google Drive untuk berjaga-jaga kalau laptop anda rusak atau hilang dicuri orang, anda masih memiliki akses ke server.

Semoga informasi ini bermanfaat bagi anda.
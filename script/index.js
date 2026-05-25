    document.getElementById('email-btn').addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn trang web cuộn lên đầu khi bấm thẻ #
        
        const emailAddress = 'johnyduong.vn@gmail.com';
        
        // Sử dụng Clipboard API để copy email
        navigator.clipboard.writeText(emailAddress).then(() => {
            // Lưu lại chữ gốc (Email Me)
            const originalText = this.innerText;
            
            // Đổi hiệu ứng nút khi đã copy thành công
            this.innerText = 'Copied to Clipboard! ✓';
            this.style.backgroundColor = '#10b981'; // Đổi sang màu xanh lá thân thiện
            this.style.borderColor = '#10b981';
            this.style.color = '#ffffff';
            
            // Sau 2 giây, trả nút về trạng thái ban đầu
            setTimeout(() => {
                this.innerText = originalText;
                this.style.backgroundColor = ''; 
                this.style.borderColor = '';
                this.style.color = '';
            }, 2000);
        }).catch(err => {
            // Phương án dự phòng nếu trình duyệt cũ không hỗ trợ tự động copy
            alert('My email: ' + emailAddress);
        });
    });

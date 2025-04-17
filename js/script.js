// ============================================ //
// +++++++++++++ Input Name +++++++++++++++++ //
// =========================================== //
window.onload = function () {
    let name = prompt("Please Enter Your Name:");

    let welcome = document.getElementById("welcome");

    if (name && welcome) {
        welcome.textContent = `Hi ${name}, Enhace Your Future With TechEduca`;
    }
};


// ============================================ //
// +++++++++++++ Image Slider ++++++++++++++++ //
// =========================================== //
document.addEventListener('DOMContentLoaded', function () {
  // Ambil semua banner
const banners = document.querySelectorAll('.slide-banner');
let currentSlide = 0;

// Fungsi untuk mengubah slide
function showSlide(index) {
  banners.forEach((banner, i) => {
    banner.classList.toggle('active', i === index);
  });
}

// Auto-slide setiap 3 detik
function startSlider() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % banners.length;
    showSlide(currentSlide);
  }, 3000);
}

// Jalankan slider
startSlider();
});



// ============================================ //
// +++++++++ Navbar Toggle Responsive +++++++++ //
// =========================================== //
$('#menu-btn').click(function () {
    $('nav .navigation ul').addClass('active');
});

$('#menu-close').click(function () {
    $('nav .navigation ul').removeClass('active');
});



// ============================================ //
// +++++++++ Contact Us With Output ++++++++++ //
// =========================================== //
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subjectSelect = document.getElementById('subject');
    const subject = subjectSelect.value;
    const message = document.getElementById('message').value.trim();

    let isValid = true;
    
    // Output 
    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('email-error').textContent = 'Email is required';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email format';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    if (subject === '') {
        document.getElementById('subject-error').textContent = 'Subject is required';
        document.getElementById('subject-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('subject-error').style.display = 'none';
    }

    if (message === '') {
        document.getElementById('message-error').textContent = 'Message is required';
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('message-error').style.display = 'none';
    }

    if (isValid) {
        document.getElementById('output-name').textContent = name;
        document.getElementById('output-email').textContent = email;
        document.getElementById('output-subject').textContent = subjectSelect.options[subjectSelect.selectedIndex].text;
        document.getElementById('output-message').textContent = message;

        alert('Form submitted successfully!');
        document.getElementById('contact-form').reset();
    }
    
    // ============================================ //
    // +++++++++++++ Webhook Feature +++++++++++++ // 
    // =========================================== //
    const discordWebhookUrl = 'https://discord.com/api/webhooks/1361957560378458194/wb6K73UrfyY4goolxvQREVXqRhvcXYPTq1yekuCqRxxUi3Ai-BI2PyybRZ9FvNuC9u1X';

    const embedPayload = {
        embeds: [
            {
                title: "📬 New Contact Form Submission",
                color: 0x00aaff,
                fields: [
                    { name: "👤 Name : ", value: name, inline: false },
                    { name: "📧 Email : ", value: email, inline: false },
                    { name: "📚 Subject : ", value: subjectSelect.options[subjectSelect.selectedIndex].text, inline: false},
                    { name: "📝 Message : ", value: message, inline: false }
                ],
                footer: {
                    text: "Contact Form • " + new Date().toLocaleString()
                }
            }
        ]
    };

    fetch(discordWebhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(embedPayload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send message to Discord');
        }
        console.log('Message sent to Discord successfully');
    })
    .catch(error => {
        console.error('Error sending to Discord:', error);
    });
});



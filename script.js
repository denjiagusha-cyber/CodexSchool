{
border-radius: 8px;
cursor: pointer;
transition: 0.2s;
}
.btn:hover { opacity: 0.85; }


.card {
background: #f0f0f0;
padding: 30px;
border-radius: 12px;
text-align: center;
}


.slider { position: relative; }
.slide {
display: none;
padding: 40px;
background: #ececec;
border-radius: 8px;
text-align: center;
}
.slide:first-child { display: block; }
.prev, .next {
position: absolute;
top: 50%; transform: translateY(-50%);
background: #6a5af9;
color: #fff;
border: none;
padding: 10px 15px;
border-radius: 6px;
cursor: pointer;
}
.prev { left: -50px; }
.next { right: -50px; }


.form input, .form textarea {
width: 100%;
padding: 12px;
margin-bottom: 12px;
border-radius: 6px;
border: 1px solid #ccc;
}


.modal {
display: none;
position: fixed;
top: 0; left: 0; width: 100%; height: 100%;
background: rgba(0,0,0,0.6);
justify-content: center;
align-items: center;
}
.modal.active { display: flex; }
.modal-content {
background: #fff;
padding: 25px;
border-radius: 12px;
position: relative;
}
.modal-close {
position: absolute;
top: 10px; right: 10px;
background: none;
border: none;
font-size: 22px;
cursor: pointer;
}

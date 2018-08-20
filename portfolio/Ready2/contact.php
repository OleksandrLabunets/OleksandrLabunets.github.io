<?php
require 'header.php';

?>

    <div class="container-fluid">
        <div class="contact-img">
            <div class="container text-center">
                <h3>Contact</h3>
                <p>We’re open Monday through Friday from 7:00 AM to 6:00 PM (PST).</p>
                <div class="data">
                    <p>TEL-<a href="#">310.728.6289</a></p>
                    <span>FAX: 310.728.6289 </span>
                    <p>Email-<a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=joelandcompany@gmail.com">joelandcompany@gmail.com</a></p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6  contact-form">
                <form action="contact.php" method="POST" id="mainForm">
                     <div class="form-group">
                        <label for="Name">Full Name</label>
                        <input type="text" class="form-control empty-gap" id="name" name="name">
                    </div>
                    <div class="form-group">
                        <label for="Email">Email</label>
                        <input type="email" class="form-control empty-gap" id="Email" name="email">
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" class="form-control  empty-gap" id="phone" name="phone">
                    </div>
                    <div class="form-group">
                        <label for="Subject">Subject</label>
                        <input type="text" class="form-control  empty-gap" id="subject" name="subject">
                    </div>
                    <div class="form-group">
                        <label for="mes">Message</label><br />
                        <textarea name="clienMessage" id="add-inform" cols="60" rows="14" maxlength="500" name="message"></textarea>
                    </div>
                     <button type="submit" name="submit" class="send-btn" id="s-info">Send</button>
<!--                    <input type="submit" name="submit" placeholder="send">-->
                </form>
                <div class="success-form">
                    <h1>Your contact data was successfull send!</h1>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 sol-photo">
                <img src="https://losangelesgeneralcontractor.com//nas/content/live/joelco/wordpress/wp-content/uploads/2016/03/contact-6.jpg" alt="" style="width: 100%">
            </div>
        </div>
        <div class="btn-to-top">
            <button class="btn-top" title="go to top">
                <i class="fa fa-angle-up"></i>
            </button>
         </div>
    </div>
    <div class="container">
        <div class="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13223.174250560023!2d-118.47297920053636!3d34.049166199004254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bca07b4d8547%3A0x392d9b6109c8d210!2s11693+San+Vicente+Blvd%2C+Los+Angeles%2C+CA+90049!5e0!3m2!1sen!2sus!4v1457994126718" frameborder="0" width="" height="350px"></iframe>
        </div>
    </div>


<div class="feed">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <h1>Instagram Feed</h1>
            <a href="https://www.instagram.com/p/BbPna59AlIg/" target="_blank">
                <img src="img/feed-11.jpg" alt="">
            </a>
            <a href="https://www.instagram.com/p/BbBF-SYAL7U/" target="_blank">
                <img src="img/feed-2.jpg" alt="">
            </a>
            <a href="https://www.instagram.com/p/BbBFMvCAz_P/" target="_blank">
                <img src="img/feed-3.jpg" alt="">
            </a>
            <a href="https://www.instagram.com/p/BZxEN8AAA_T/" target="_blank">
                <img src="img/feed-4.jpg" alt="">
            </a>
            <a href="https://www.instagram.com/p/BZxD67tgL9u/" target="_blank">
                <img src="img/feed-5.jpg" alt="">
            </a>
            <a href="https://www.instagram.com/p/BZlbeWcAUsZ/" target="_blank">
                <img src="img/feed-6.jpg" alt="">
            </a>
            <a href="https://www.instagram.com/p/BZbREFcgNHI/" target="_blank">
                <img src="img/feed-7.jpg" alt="">
            </a><br />
            <a href="https://www.instagram.com/joelandcompany/" id="sol-bot" target="_blank">more photos @joelandcompany</a>
        </div>
    </div>
</div>



<?php
require 'footer.php';
?>

import { render } from '@react-email/render';
import sendgrid from '@sendgrid/mail';
import { NextResponse } from 'next/server';
import NewsletterReply from '@/emails/NewsletterReply';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
    const {email} = await request.json();
    
    const emailHtml = render(<NewsletterReply email={email} />);

    const options = {
        from: 'khalelogram0118@gmail.com',
        to: email,
        subject: 'Newsletter Subscription - MotMotstudio',  
        html: emailHtml,
    };

    const send = await sendgrid.send(options);
    
    return NextResponse.json({
        status: 'Ok'
    })
}
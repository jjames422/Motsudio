import { render } from '@react-email/render';
import sendgrid from '@sendgrid/mail';
import ThankYou from '../../../emails/ThankYou';
import { NextResponse } from 'next/server';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
    const {email, company, name} = await request.json();
    console.log(email)
    const emailHtml = render(<ThankYou email={email} company={company} name={name} />);

    const options = {
        from: 'khalelogram0118@gmail.com',
        to: email,
        subject: 'Contact Us Form Submission - MotMotstudio',  
        html: emailHtml,
    };

    const send = await sendgrid.send(options);
    
    return NextResponse.json({
        status: 'Ok'
    })
}
import React from 'react'
import { useAuth } from "./../AuthContext"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Agreement() {
    const auth = useAuth();
    const handleDownloadPDF = () => {
        const loanContainer = document.querySelector('.loan-container');

        html2canvas(loanContainer).then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/png');

            pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // A4 size: 210mm x 297mm
            pdf.save('Vajra_Agreement.pdf');
        });
    };
    return (
        <>
            <section className='loansection'>

                <div className="loan-container">
                    <div className='container '>
                        <div class="form-container">
                            <div class="text-left">
                                <h2>{auth.user && auth.user.firstName}'s agreement with Vajra!</h2>
                            </div>
                            <hr />
                            <div class="d-flex justify-content-center align-items-center">
                                <img src={auth.imageURL} alt="Image" class="img-fluid agreementImg" />
                            </div>
                            <div class="text-center agrrementpoints">
                                <ol className="styled-list">
                                    <li>
                                        Users must register and create an account to access Vajra's banking services.
                                    </li>
                                    <li>
                                        Users are responsible for maintaining the confidentiality of their account information.
                                    </li>
                                    <li>
                                        Vajra will make its best efforts to provide uninterrupted and reliable access to banking services.
                                    </li>
                                    <li>
                                        Services may be temporarily unavailable for maintenance or other reasons.
                                    </li>
                                    <li>
                                        Users must take necessary precautions to keep their login credentials secure.
                                    </li>
                                    <li>
                                        Unauthorized access to an account should be reported immediately to Vajra.
                                    </li>
                                    <li>
                                        Users can perform various transactions, including deposits, withdrawals, transfers, and bill payments.
                                    </li>
                                    <li>
                                        Vajra is not responsible for errors made by users during transactions.
                                    </li>
                                    <li>
                                        Vajra may charge fees for certain services, and these will be clearly communicated to users.
                                    </li>
                                    <li>
                                        Users are responsible for any fees associated with their accounts.
                                    </li>
                                    <li>
                                        Vajra values user privacy and follows strict privacy policies.
                                    </li>
                                    <li>
                                        User data is handled in accordance with applicable data protection laws.
                                    </li>
                                    <li>
                                        Users must adhere to all applicable laws and regulations when using Vajra's services.
                                    </li>
                                    <li>
                                        Vajra reserves the right to terminate or suspend services to users who violate terms and conditions.
                                    </li>
                                    <li>
                                        Vajra is not liable for any damages or losses incurred by users while using its services.
                                    </li>
                                    <li>
                                        Vajra may update its terms and conditions, and users will be notified of any changes.
                                    </li>
                                    <li>
                                        Any disputes between users and Vajra will be resolved through arbitration or mediation.
                                    </li>
                                    <li>
                                        The terms and conditions are governed by the laws of the jurisdiction in which Vajra operates.
                                    </li>
                                </ol>
                            </div>
                            <div class="signatures">
                                <img src={auth.signURL} alt="Signature" class="img-fluid usersign" />
                                <p>{auth.user &&
                                    <>
                                        {auth.user.firstName} {auth.user.lastName}, <br />
                                        {auth.user.phone}
                                    </>
                                }
                                </p>
                            </div>
                            <div className="text-left loginbutton bodybtn">
                                <button type="submit" onClick={handleDownloadPDF}>
                                <i class="fa-solid fa-download"></i>&nbsp; Download
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

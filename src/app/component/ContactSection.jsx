"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare, MapPin, Send } from "lucide-react";

export default function ContactSection() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been submitted.");
    };

    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center space-y-3 mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Get In Touch</h2>
                    <p className="text-muted-foreground max-w-2xl text-md mx-auto">
                        Have a project in mind, an opportunity to discuss, or just want to say hi? Feel free to reach out!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Details Cards */}
                    <div className="space-y-4">
                        <Card className="shadow-sm">
                            <CardContent className="p-2 px-5 flex items-center space-x-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-muted-foreground">Email Me</h4>
                                    <a href="mailto:mdaburayhan612007@gmail.com" className="font-semibold hover:underline">
                                        mdaburayhan612007@gmail.com
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                            <CardContent className="p-2 px-5 flex items-center space-x-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-muted-foreground">Call Me</h4>
                                    <a href="tel:+8801772800576" className="font-semibold hover:underline">
                                        +880 1772-800576
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                            <CardContent className="p-2 px-5 flex items-center space-x-4">
                                <div className="p-3 bg-green-500/10 rounded-lg text-green-600">
                                    <MessageSquare className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-muted-foreground">WhatsApp</h4>
                                    <a href="https://wa.me/8801772800576" target="_blank" rel="noreferrer" className="font-semibold hover:underline">
                                        +880 1772-800576
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                            <CardContent className="p-2 px-5 flex items-center space-x-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                                    <p className="font-semibold"> Bogura, Bangladesh</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card className="shadow-sm">
                        <CardContent className="p-6 ">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Your Name</label>
                                    <Input placeholder="John Doe" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Your Email</label>
                                    <Input type="email" placeholder="john@example.com" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Message</label>
                                    <Textarea placeholder="Type your message here..." rows={5} required />
                                </div>

                                <Button type="submit" className="w-full gap-2">
                                    <Send className="h-4 w-4" /> Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
export interface Person {
    _id?: String;
    name: String;
    email: String;
    company: String;
    role: String;
    function: String;
    career_email_permission: boolean;
    access_events_permission: boolean;
    information_share_permission: boolean;
    image_url?: String;
    image_permission?: boolean;
    profile: String;
}

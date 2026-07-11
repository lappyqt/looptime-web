export interface ContactPayload {
    fullname: string;
    email: string;
    message: string;
}

export async function sendContactFeedback(data: ContactPayload) {
    const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/feedback`,
        {
            method: 'POST',
            headers: {
                apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
                Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
                'Content-Type': 'application/json',
                Prefer: 'return=minimal',
            },
            body: JSON.stringify(data)
        }
    );

    if (!response.ok) {
        throw new Error(await response.text());
    }
}
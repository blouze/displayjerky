export const actions = {
  default: async ({ request }) => {
    const form_data = await request.formData();
    form_data.append("u", "ed56fe7bc3a089b12e7b5622b")
    form_data.append("id", "ec155a6c0c")

    const response = await fetch("https://displayjerky.us17.list-manage.com/subscribe/post", {
      method: "POST",
      body: form_data
    })

    return { success: response.ok };
  }
};
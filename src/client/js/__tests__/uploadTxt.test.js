import fetchMock from "jest-fetch-mock";
import { uploadTxt } from "../uploadTxt";
global.fetch = fetchMock;


describe("API post simulator", () => {
    beforeEach(() => {
        fetchMock.mockResponseOnce(
            JSON.stringify({ 
                body: 'ok',
                status: 200 })
        );
    });
    it("Test the uploadTxt() function", async () => {
        const ourtext = "This is a news article stub";
        const status = await uploadTxt('/sentiment/submit', {"txt": ourtext})
        expect(fetchMock).toHaveBeenCalled()
        expect(fetchMock).toHaveBeenCalledWith("/sentiment/submit", {"body": "{\"txt\":\"This is a news article stub\"}", "credentials": "same-origin", "headers": {"Content-Type": "application/json"}, "method": "POST"})

    });
})
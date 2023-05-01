import Button from "../Button.component";
import Post from "../Post.component";

const HomeFeed = () => {
    return (
        <>
            <div className="home-section_tabs">
                <Button type="primary">All</Button>
                <Button type="secondary">Donors</Button>
                <Button type="secondary">Recipients</Button>
            </div>

            <div className="home-section_posts">
                <Post data={{
                    imgSrc: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000",
                    username: "Tayyab Ali Kamran",
                    type: "Recipient",
                    location: "Blue Area, Islamabad",
                    gender: "Male",
                    age: 20,
                    bloodgroup: "A+"
                }
                }/>
                <Post data={{
                    imgSrc: "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66-s1100-c50.jpg",
                    username: "Hassaan Mansur",
                    type: "Donor",
                    location: "G13 Markaz, Islamabad",
                    gender: "Female",
                    age: 18,
                    bloodgroup: "B-"
                }
                }/>
                <Post data={{
                    imgSrc: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000",
                    username: "Tayyab Ali Kamran",
                    type: "Recipient",
                    location: "Blue Area, Islamabad",
                    gender: "Male",
                    age: 20,
                    bloodgroup: "A+"
                }
                }/>
                <Post data={{
                    imgSrc: "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66-s1100-c50.jpg",
                    username: "Hassaan Mansur",
                    type: "Donor",
                    location: "G13 Markaz, Islamabad",
                    gender: "Female",
                    age: 18,
                    bloodgroup: "B-"
                }
                }/>
                <Post data={{
                    imgSrc: "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66-s1100-c50.jpg",
                    username: "Hassaan Mansur",
                    type: "Donor",
                    location: "G13 Markaz, Islamabad",
                    gender: "Female",
                    age: 18,
                    bloodgroup: "B-"
                }
                }/>
            </div>
        </>
    );
}

export default HomeFeed;
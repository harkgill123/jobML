import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import JobPage from "./pages/JobPage";
import CandidateHomepage from "./pages/CandidateHomepage";
import CandidateMyProfile from "./pages/CandidateMyProfile";
import CandidateSearchPage from "./pages/CandidateSearchPage";
import CandidateDashboard from "./pages/CandidateDashboard";
import CandidateAppliedJobs from "./pages/CandidateAppliedJobs";
import CandidateFavoriteJobs from "./pages/CandidateFavoriteJobs";
import CandidateSettingAccount from "./pages/CandidateSettingAccount";
import EmployerHomepage from "./pages/EmployerHomepage";
import EmployerDashboard from "./pages/EmployerDashboard";
import EmployerMyJobs from "./pages/EmployerMyJobs";
import EmployerSavedCandidates from "./pages/EmployerSavedCandidates";
import EmployerPostAJob from "./pages/EmployerPostAJob";
import EmployerSettingsPersonal from "./pages/EmployerSettingsPersonal";
import EmployerSettingsAccount from "./pages/EmployerSettingsAccount";
import EmployerSearchPage from "./pages/EmployerSearchPage";
import CreateAccount from "./pages/CreateAccount";
import EmployerCreateAccount from "./pages/EmployerCreateAccount";
import ResumeUpload from "./pages/ResumeUpload";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/job-page":
        title = "";
        metaDescription = "";
        break;
      case "/candidate-homepage":
        title = "";
        metaDescription = "";
        break;
      case "/candidate-my-profile":
        title = "";
        metaDescription = "";
        break;
      case "/candidate-search-page":
        title = "";
        metaDescription = "";
        break;
      case "/candidate-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/candidate-applied-jobs":
        title = "";
        metaDescription = "";
        break;
      case "/candidate-favorite-jobs":
        title = "";
        metaDescription = "";
        break;
      case "/candidate-setting-account":
        title = "";
        metaDescription = "";
        break;
      case "/employer-homepage":
        title = "";
        metaDescription = "";
        break;
      case "/employer-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/employer-my-jobs":
        title = "";
        metaDescription = "";
        break;
      case "/employer-saved-candidates":
        title = "";
        metaDescription = "";
        break;
      case "/employer-post-a-job":
        title = "";
        metaDescription = "";
        break;
      case "/employer-settings-personal":
        title = "";
        metaDescription = "";
        break;
      case "/employer-settings-account":
        title = "";
        metaDescription = "";
        break;
      case "/employer-search-page":
        title = "";
        metaDescription = "";
        break;
      case "/candidate-create-account":
        title = "";
        metaDescription = "";
        break;
        case "/employer-create-account":
          title = "";
          metaDescription = "";
          break;
        case "/resume-upload":
          title = "";
           metaDescription = "";
          break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/job-page" element={<JobPage />} />
      <Route path="/candidate-homepage" element={<CandidateHomepage />} />
      <Route path="/candidate-my-profile" element={<CandidateMyProfile />} />
      <Route path="/candidate-search-page" element={<CandidateSearchPage />} />
      <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
      <Route
        path="/candidate-applied-jobs"
        element={<CandidateAppliedJobs />}
      />
      <Route
        path="/candidate-favorite-jobs"
        element={<CandidateFavoriteJobs />}
      />
      <Route
        path="/candidate-setting-account"
        element={<CandidateSettingAccount />}
      />
      <Route path="/employer-homepage" element={<EmployerHomepage />} />
      <Route path="/employer-dashboard" element={<EmployerDashboard />} />
      <Route path="/employer-my-jobs" element={<EmployerMyJobs />} />
      <Route
        path="/employer-saved-candidates"
        element={<EmployerSavedCandidates />}
      />
      <Route path="/employer-post-a-job" element={<EmployerPostAJob />} />
      <Route
        path="/employer-settings-personal"
        element={<EmployerSettingsPersonal />}
      />
      <Route
        path="/employer-settings-account"
        element={<EmployerSettingsAccount />}
      />
      <Route path="/employer-search-page" element={<EmployerSearchPage />} />
      <Route path="/candidate-create-account" element={<CreateAccount />} />
      <Route path="/resume-upload" element={<ResumeUpload />} />
      <Route path="/employer-create-account" element={<EmployerCreateAccount />} />
    </Routes>
  );
}
export default App;
